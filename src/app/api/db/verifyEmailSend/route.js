
async function verifyEmailSend(adminEmail, adminID, email) {
    const __res = await fetch(`${process.env.CVF2023_MYAPI_HOST}/email/verifySend`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + process.env.CVF2023_MYAPI_SECRET,
        },
        body: JSON.stringify({
            "adminEmail": adminEmail,
            "adminID": adminID,
            "email": email,
        }),
    }).then((res) => {
        return res.json();
    })

    if(__res['response_code'] === 200) {
        return true;
    } else {
        return false;
    }
}

export async function POST(req) {
    const res = await req.json();
    if (req.headers.get("Referer") !== `${process.env.NEXT_PUBLIC_HOST_URL}/dash/admin`) {
        return new Response("Invalid referrer", { status: 403 });
    }

    const isTrue = await verifyEmailSend(res.adminEmail, res.adminID, res.email);
    const __text = isTrue ? "OK" : "NG";
    return new Response(__text, { status: 200 });
}