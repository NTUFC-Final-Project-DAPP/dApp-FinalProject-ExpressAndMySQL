import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact() {
    return (
        <main className="bg-test bg-cover bg-center min-h-screen flex flex-col">
            <Navbar />
            <div className="container mx-auto py-8 flex-1">
                <h1 className="text-3xl font-bold mb-8 text-center text-white mt-12">聯絡我們</h1>
                <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">姓名</label>
                            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">電子郵件</label>
                            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">主題</label>
                            <input type="text" id="subject" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">訊息</label>
                            <textarea id="message" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" rows="5"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">送出</button>
                        </div>
                    </form>
                </div>
                <div className="mt-8 text-center text-white">
                    <p>你也可以通過以下方式聯絡我們：</p>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Main Street, City, Country</p>
                    <div className="flex justify-center mt-4">
                        <a href="https://facebook.com" className="mx-2 text-blue-500">Facebook</a>
                        <a href="https://twitter.com" className="mx-2 text-blue-500">Twitter</a>
                        <a href="https://linkedin.com" className="mx-2 text-blue-500">LinkedIn</a>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
