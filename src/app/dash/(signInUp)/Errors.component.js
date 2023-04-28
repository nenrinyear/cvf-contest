import styles from "./page.module.css";

const errors = {
    Signin: "別のアカウントでログインしてみてください",
    OAuthSignin: "別のアカウントでサインインしてみてください",
    Callback: "キャンセルしましたか？もう一度やり直してください",
    OAuthCallback: "キャンセルしましたか？もう一度やり直してください",
    EmailCreateAccount: "このメールアドレスは既に使用されています。別のメールアドレスを使用してください",
    OAuthCreateAccount: "別のアカウントでサインインしてみてください",
    EmailSignin: "メールアドレスとパスワードを確認してください",
    CredentialsSignin: "メールアドレスとパスワードを確認してください",
    OAuthAccountNotLinked: "このアカウントは既に使用されています。別のアカウントでサインインしてみてください",
    default: "エラーが発生しました",
};

export default function Errors({ error }) {
    return (
        <div className={styles.Error} onClick={e => {
            e.currentTarget.remove();
        }}>
            <p>{errors[error] || errors.default}</p>
        </div>
    );
}