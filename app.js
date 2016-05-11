// app是项目的main，它的责任是
var express = require('express');
var app = express();
// 一，生成页面，get
app.get('/',function(req, res){
	// 在响应函数里面发送html资源
});
// 二，响应生成短链接的请求，post
app.post('/api/shorten', function(req, res){
	// 在响应函数里面执行
	// 1, 获取从前端而来的长URL
	// 2, 编码长URL
	// 3，将长URL存入数据库
});
// 三，响应短连接的请求，get
app.get('/:short_url', function(req,res){
	// 在响应函数里面执行
	// 1，查询数据库是否存在这样的short_url
	// 2，解码短URL
	// 3，重定向
});