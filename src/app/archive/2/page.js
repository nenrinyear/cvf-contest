import PageTransition from "../../../components/PageTransition";
import Footer from "../../../components/Footer";

export const metadata = {
    title: "過去のCVF(第二回)",
    description: "過去のCVF(第二回)のページです。",
    opneGraph: {
        title: "過去のCVF(第二回)",
        description: "過去のCVF(第二回)のページです。",
    },
    twitter: {
        title: "過去のCVF(第二回)",
        description: "過去のCVF(第二回)のページです。",
    },
};

export default function ArchivePage2() {
    return (
        <PageTransition>
            <h1>Archive Page2</h1>
            <Footer />
        </PageTransition>
    );
}