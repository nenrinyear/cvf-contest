export default function SignInUpLayout({ children }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            width: '100%',
            height: '100vh',
        }}>
            {children}
        </div>
    )
}