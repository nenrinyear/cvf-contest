import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

export const metadata = {
    title: "過去のCVF(第一回)",
    description: "過去のCVF(第一回)のページです。",
    opneGraph: {
        title: "過去のCVF(第一回)",
        description: "過去のCVF(第一回)のページです。",
    },
    twitter: {
        title: "過去のCVF(第一回)",
        description: "過去のCVF(第一回)のページです。",
    },
};


export default function ArchivePage1() {
    return (
        <PageTransition>
            <h1>Archive Page1</h1>
            <Footer />
        </PageTransition>
    );
}