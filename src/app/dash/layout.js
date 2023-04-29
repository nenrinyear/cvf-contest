import NavCompornent from "@/components/Navbar";

export default function DashRootLayout({ children }) {
    "use client";
    return (
        <>
            <NavCompornent isStaticFixed={true} isFixedTop={true} />
            {children}
        </>
    )
}