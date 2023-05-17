"use client";

export default function VerifySend({ children, email, adminEmail, adminID }) {
    const sendVerifyEmail = () => {
        if (confirm("確認メールを送信します。")) {
            fetch("/api/db/verifyEmailSend", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    adminEmail: adminEmail,
                    adminID: adminID,
                })
            }).then((res) => {
                if (res.status === 200) {
                    alert("確認メールを送信しました。: " + email + '\n再読込してください。');
                } else {
                    alert("エラーが発生しました。");
                }
            })
            .catch((err) => {
                console.error(err);
                alert("エラーが発生しました。");
            })
        }
    }
    return (
        <button onClick={sendVerifyEmail} style={{
            cursor: "pointer",
            border: "1px solid #000",
            borderRadius: "5px",
            padding: "5px 10px",
        }} title="クリックで確認メール再送信">
            {children}
        </button>
    )
}