async function setUserData(email, name, twitterID) {
    const __res = await fetch(`${process.env.CVF2023_MYAPI_HOST}/setUserData`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.CVF2023_MYAPI_SECRET}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            name: name,
            twitterID: twitterID,
        }),
        cache: "no-cache",
    }).then(res => res.json());

    const res = __res;
    if (res['response_code'] === 200) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {import('next/server').NextRequest} req
 * @returns {String}
 **/
export async function POST(req) {
    const res = await req.json();
    if (req.headers.get("Referer") !== `${process.env.NEXT_PUBLIC_HOST_URL}/dash/setup`) {
        return new Response("Invalid referrer", { status: 403 });
    }

    const isTrue = await setUserData(res.email, res.name, res.twitterID);
    const __text = isTrue ? "OK" : "NG";
    return new Response(__text, { status: 200 });
}