const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
 
// 这里从环境变量读取配置，方便命令行启动
// HOST 指目标地址
// PORT 服务端口
// const { HOST = 'http://blog:8085', PORT = '8080' } = process.env;
const { HOST = 'http://47.99.132.7:8085', PORT = '8080' } = process.env;
 
// 设置端口
app.set('port', PORT);
 
 
// 静态页面
// 这里一般设置你的静态资源路径
app.use('/', express.static('dist'));
 
// 反向代理（这里把需要进行反代的路径配置到这里即可）
// proxy 中间件的选择项
const options = {
    target: HOST, // 目标服务器 host
    changeOrigin: true,               // 默认false，是否需要改变原始主机头为目标URL
    ws: true,                         // 是否代理websockets
    // pathRewrite: {
    //     '^/api' : '/api/new-path',     // 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path
    //     '^/adm' : '/path'           // 同上
    // },
    // router: {
    //     // 如果请求主机 == 'dev.localhost:3000',
    //     // 重写目标服务器 'http://www.example.org' 为 'http://localhost:8000'
    //     'dev.localhost:3000' : 'http://localhost:8000'
    // }
};

// eg:将/api/test 代理到 ${HOST}/api/test
app.use('/', proxy(options));
 
// 监听端口
app.listen(app.get('port'), () => {
  console.log(`server running http://localhost:${app.get('port')}`);
});