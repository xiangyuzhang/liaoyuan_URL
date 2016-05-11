// app是项目的main
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var config = require('./config');
// *部署资源
// * 1 连接数据库
mongoose.connect('mongodb://' + config.db.host + '/' + config.db.name);
// * 2 获取资源
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));







// 设置RESTful API
// 一，生成页面，get
app.get('/',function(req, res){
	// 在响应函数里面发送html资源
	res.sendFile(path.join(__dirname, 'views/index.html'))
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


var server = app.listen(3000, function(){
	console.log('Thank you for using URL Shortener');
	console.log('This application is used for Liaoyuan Test Only');
	console.log('Author: Xiangyu Zhang');
  	console.log('Server listening on port 3000');
});