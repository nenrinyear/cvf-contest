import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 500],
    display: 'swap',
})

export default function Home() {
      
    return (
        <div className="top">
            <header>
                <div className="w-screen h-screen bg-black flex justify-center items-center">
                    <video muted autoPlay loop className="w-1/4 rounded-full">
                        <source src="/CVF_motion.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="fixed bottom-0 mt-0 mr-0 mb-12 ml-12">
                    <p className={`text-white font-extralight italic text-9xl select-none pt-2 pb-2 pr-0 pl-0 ${jost.className}`}>
                        CVF
                    </p>
                </div>
            </header>
            <main>

            </main>
        </div>
    )
}