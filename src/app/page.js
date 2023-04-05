import styles from './page.css';

export default function Home() {
    return (
        <main>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white rounded-lg shadow-xl p-12">
                    <h1 className="text-2xl font-semibold">Hello World</h1>
                </div>
            </div>
        </main>
    )
}