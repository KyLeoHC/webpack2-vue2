/**
 * mock数据接口
 * by KyLeo on 2017/2/27.
 */
let fs = require("fs");
let url = require("url"), querystring = require('querystring');
let http = require("http");
let port = '9008',
    ip = require('./getIPAddress')();
const delay = 3000;
const delayInterfaces = [];
const dataMap = {
    '/goods': [
        {
            name: '肥皂',
            price: 233
        },
        {
            name: '沐浴露',
            price: 999
        }
    ],
    '/person': {
        name: 'John',
        sex: 'male'
    }
};
let server = http.createServer(function (req, res) {
    let data = dataMap[req.url] || null;
    //模拟正常的数据接口
    console.log('request incoming:' + req.url);
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With, X-Custom-Header");
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'});
    if (delayInterfaces.indexOf(req.url) > -1 && req.method !== 'OPTIONS') {
        //模拟接口响应缓慢
        setTimeout(() => {
            res.end('{"code": 0, "msg": "success", "data": ' + JSON.stringify(data) + '}');
        }, delay);
    } else {
        res.end('{"code": 0, "msg": "success", "data": ' + JSON.stringify(data) + '}');
    }
});
console.info('[Mock Server]listen on ' + ip + ':' + port);
server.listen(port, ip);
