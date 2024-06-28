import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRoutes from './api.js'; // 引用 api.js

const app = express();

// 使用 cors 中间件
app.use(cors());

// 将 request 进来的 data 转成 json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 基本路由
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 使用 API 路由
app.use('/api', apiRoutes);

// 监听 5500 端口
app.listen(5500, function () {
  console.log('Node app is running on port 5500');
});
