import NavCompornent from "@/components/Navbar";

export default function PagesLayout({ children }) {
    "use client";
    return (
        <>
            <NavCompornent />
            {children}
        </>
    )
}