import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <main className="bg-test bg-cover bg-center text-black">
            <Navbar />
            <div className="flex min-h-screen justify-center items-center flex-col text-center text-lg p-4">
                <h1 className="text-3xl font-bold mb-4 text-black">關於我們的dApp平台</h1>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mt-4">平台目標</h2>
                    <p className="mb-2">
                        我們的平台不僅僅是為了解決流浪教師的經濟問題，更希望建立一個公平、公正的教育生態系統。無論教師來自何處，都能夠在這裡找到展示自己的舞台，並通過自己的努力獲得相應的回報。同時，學生也能夠以合理的價格獲得優質的教育資源，從而達到雙贏的局面。
                    </p>
                    <p className="mb-2">
                        我們堅信，通過這個平台，流浪教師能夠重新找回教學的熱情和動力，並為更多的學生帶來知識和希望。我們致力於打造一個人人皆可教、人人皆可學的開放式教育平台，讓教育變得更加普及和公平。
                    </p>
                    <p className="mb-2">
                        這就是我們開發這個dApp平台的初衷和目標。期待您的加入，共同為教育公平和教師的未來努力！
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
