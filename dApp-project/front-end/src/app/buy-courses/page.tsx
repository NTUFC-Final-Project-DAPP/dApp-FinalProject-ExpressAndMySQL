import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from 'next/image';

export default function Home() {
    const courses = [
        {
            title: "如何做出會「動」的網頁? React 設置細節全解析",
            instructor: "姚心柔",
            image: "/images/image1.png",
            progress: "0%",
            duration: "無觀看期限限制"
        },
        {
            title: "快速連接 Web3 錢包，用 RainbowKit 實作連接錢包",
            instructor: "謝宗佑",
            image: "/images/image2.png",
            progress: "0%",
            duration: "無觀看期限限制"
        },
        {
            title: "快速部屬鍊上代幣，製作你的第一個ERC20！",
            instructor: "林奕璇",
            image: "/images/image3.png",
            progress: "0%",
            duration: "無觀看期限限制"
        },
        {
            title: "了解 ZKML ，創立第二個NOYA，開發具有隱私性的 Dapp",
            instructor: "Maxwell Friedman",
            image: "/images/image4.png",
            progress: "0%",
            duration: "無觀看期限限制"
        }
    ];

    return (
        <main className="bg-test bg-cover bg-center">
            <Navbar />
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-8 text-center mt-24">線上課程</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                                <p className="text-gray-600 mb-2">講師: {course.instructor}</p>
                                <div className="flex items-center mb-2">
                                    <span className="text-gray-600 mr-2">{course.progress} 完成</span>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: course.progress }}></div>
                                    </div>
                                </div>
                                <p className="text-gray-600">{course.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
