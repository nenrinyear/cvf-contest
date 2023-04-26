import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import DiscordProvider from 'next-auth/providers/discord';


import { auth } from '@/firebase/admin';


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
        async signIn({ account, profile }) {
            if (account.provider === "credentials") {
                if (profile.email_verified === false) {
                    return false;
                }
            }
            
            if (account.provider === "discord") {
                if(account == null || profile == null || account.access_token == null) return false;
                await SignInThenJoinGuild(account.access_token, profile.id);
            }
            return true;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (account?.provider === "credentials") {
                token.emailVerified = user.emailVerified;
                token.uid = user.uid;
                token.profile = null;
                token.access_token = null;
            }
            if (account?.provider === "discord") {
                token.emailVerified = true;
                token.uid = user.id;
                token.profile = profile;
                token.access_token = account.access_token;
            }
            return token;
        },
        // sessionにJWTトークンからのユーザ情報を格納
        async session({ session, token }) {
            
            session.user.emailVerified = token.emailVerified;
            session.user.uid = token.uid;
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
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}
