import { ethers } from "ethers";
import mysql from "mysql2/promise";
import express from 'express';

const router = express.Router();

// 利用Infura的RPC节点连接以太坊网络
const INFURA_ID = '7bd1b54a33964626975adf961ff5dc80';
const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

// 合约的ABI
const contractABI = [
    "function getCourse(uint256 courseId) view returns (string, address, uint256, bool, string)"
];

// 合约地址
const contractAddress = '0x1b9cCAf5F8814cC6155b4a359e912A0CB2adFD74';
const contract = new ethers.Contract(contractAddress, contractABI, provider);

// MySQL数据库连接配置
const dbConfig = {
    host: '172.26.219.246', // Ubuntu 伺服器的 IP 地址
    user: 'rpc_user',
    password: 'password',
    database: 'education_platform'
};

// 保存课程数据到MySQL数据库的函数
const saveCourseToDB = async (name, teacher, price, isFree, ipfsHash) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const query = `
            INSERT INTO Course (Course_Name, User_Id, price, Is_Charity, Course_IPFS)
            VALUES (?, ?, ?, ?, ?)
        `;
        const [rows] = await connection.execute(query, [name, teacher, price, isFree, ipfsHash]);
        console.log("Course data inserted successfully:", rows);
        await connection.end();
    } catch (error) {
        console.error("Error inserting course data:", error);
    }
};

// 处理前端发送的添加课程请求
router.post('/courses', async (req, res) => {
    const { Course_Name, User_Id, price, Is_Charity, Course_IPFS } = req.body;
    try {
        await saveCourseToDB(Course_Name, User_Id, price, Is_Charity, Course_IPFS);
        res.status(200).send({ message: "Course added successfully" });
    } catch (error) {
        console.error("Error saving course data:", error);
        res.status(500).send({ message: "Error saving course data" });
    }
});

// 新增 GET 請求的處理路由來檢索課程數據
router.get('/courses', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM Course');
        await connection.end();
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching course data:", error);
        res.status(500).send({ message: "Error fetching course data" });
    }
});
// 导出 router
export default router;
