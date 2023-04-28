import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import DiscordProvider from 'next-auth/providers/discord';


import { auth } from '@/firebase/admin';

const myapi_host = process.env.CVF2023_MYAPI_HOST;

async function SignInThenJoinGuild(access_token, user_id) {
    const res = await fetch(`https://discord.com/api/guilds/${process.env.CVF2023_Discord_Guild_ID}/members/${user_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`
        },
    })
    if (res.ok) {
        return res.json();
    }
    return null;
}

async function isNewUser(email) {
    const __res = await fetch(`${myapi_host}/existCheck`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.CVF2023_MYAPI_SECRET}`,
        },
        body: {
            email: email
        },
    });
    const res = await __res.json();
    if (res['response_code'] === 200 && res['response'] === 'true') {
        return true;
    } else {
        return false;
    }
}

async function getUserDataByDB(email) {
    const __res = await fetch(`${myapi_host}/getUserData`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.CVF2023_MYAPI_SECRET}`,
        },
        body: {
            email: email
        },
    });
    const res = await __res.json();
    if (res['response_code'] === 200) {
        return res['response'];
    } else {
        return null;
    }
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            credentials: {},
            authorize: async ({ idToken }, _req) => {
                if (idToken) {
                    try {
                        const decoded = await auth.verifyIdToken(idToken);

                        return { ...decoded };
                    } catch (err) {
                        console.error(err);
                    }
                }
                return null;
            },
        }),
        DiscordProvider({
            clientId: process.env.NEXT_PUBLIC_CVF2023_Discord_Client_ID,
            clientSecret: process.env.CVF2023_Discord_Client_Secret,
            authorization: {
                params: {
                    scope: 'identify email guilds.join',
                },
            },

        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        async signIn({ account, profile, user }) {
            if (account.provider === "discord") {
                if(account == null || profile == null || account.access_token == null) return false;
                await SignInThenJoinGuild(account.access_token, profile.id);
                if(await isNewUser(profile.email)) {
                    return true;
                } else {
                    return '/dash/setup';
                }
            }
            if (account.provider === "credentials") {
                if (await isNewUser(user.email)) {
                    return true;
                } else {
                    return '/dash/setup';
                }
            }

            return false;
        },
        async jwt({ token, user, account, profile }) {
            console.log(token);
            if (user && account && profile) {
                if (account?.provider === "credentials") {
                    token.provider = "credentials";
                    token.email = user.email;
                    token.uid = user.uid;
                    const userData = await getUserDataByDB(user.email);
                    token.userData = userData;
                    token.profile = null;
                    token.access_token = null;
                }
                if (account?.provider === "discord") {
                    token.provider = "discord";
                    token.email = profile.email;
                    token.uid = user.id;
                    const userData = await getUserDataByDB(profile.email);
                    token.userData = userData;
                    token.profile = profile;
                    token.access_token = account.access_token;
                }
            }
            return token;
        },
        // sessionにJWTトークンからのユーザ情報を格納
        async session({ session, token }) {
            session.provider = token.provider;
            session.user.email = token.email;
            session.user.uid = token.uid;
            session.user.userData = token.userData;
            session.user.profile = token.profile;
            session.user.access_token = token.access_token;
            return session;
        },
    },
    logger: {
        error(code, ...message) {
            console.error(code, message);
        },
        warn(code, ...message) {
            console.warn(code, message);
        },
        debug(code, ...message) {
            console.debug(code, message);
        },
    },
    pages: {
        signIn: '/dash/login',
        signOut: '/dash/logout',
        error: '/dash/login',
    },
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}
