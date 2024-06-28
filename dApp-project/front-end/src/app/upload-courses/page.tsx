"use client";

import React, { useState } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { addCourse } from '@/api'; // 確認導入路徑正確

const UploadCourses = () => {
    const [newCourse, setNewCourse] = useState({
        Course_Name: '',
        Course_IPFS: '',
        User_Id: 1,
        price: 0.0,
        Is_Charity: 0,
        ViewCount: 0,
    });

    const handleAddCourse = async () => {
        try {
            await addCourse(newCourse);
            // 添加成功後的處理，例如顯示通知或清空表單
            setNewCourse({
                Course_Name: '',
                Course_IPFS: '',
                User_Id: 1,
                price: 0.0,
                Is_Charity: 0,
                ViewCount: 0,
            });
        } catch (error) {
            console.error('Failed to add course:', error);
        }
    };

    return (
        <main className="bg-test bg-cover bg-center flex flex-col min-h-screen justify-center items-center">
            <Navbar />
            <h1 className="text-3xl font-bold">Here you can upload your courses.</h1>
            <div className="flex flex-col items-center">
                <input
                    type="text"
                    placeholder="Course Name"
                    value={newCourse.Course_Name}
                    onChange={(e) => setNewCourse({ ...newCourse, Course_Name: e.target.value })}
                    className="mb-2 p-2 border"
                />
                <input
                    type="text"
                    placeholder="Course IPFS"
                    value={newCourse.Course_IPFS}
                    onChange={(e) => setNewCourse({ ...newCourse, Course_IPFS: e.target.value })}
                    className="mb-2 p-2 border"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newCourse.price}
                    onChange={(e) => setNewCourse({ ...newCourse, price: parseFloat(e.target.value) })}
                    className="mb-2 p-2 border"
                />
                <button
                    className="custom-button transition-transform transform hover:scale-125 duration-300"
                    onClick={handleAddCourse}
                >
                    Upload Courses
                </button>
            </div>
            <Footer />
        </main>
    );
}

export default UploadCourses;
