// app是项目的main
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var config = require('./config');
var Url = require('./models/url');
var base58 = require('./base58.js');
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
app.get('*',function(req, res){
	// 在响应函数里面发送html资源
	res.sendFile(path.join(__dirname, 'views/index.html'))
});
// 二，响应生成短链接的请求，post
app.post('/api/shorten', function(req, res){
	// 在响应函数里面执行
	// 1, 获取从前端而来的长URL
	console.log("/api/short react");
	var longUrl = req.body.url;
	var shortUrl = '';
	// 2 检查是否URl已经存储?
	Url.findOne({long_url: longUrl}, function (err, doc){
	if (doc)
	{
		console.log("longUrl: " + longUrl + " is existed");
	// Yes: 直接编码之后发送
	 	shortUrl = config.webhost + base58.encode(doc._id);
	 	res.send({'shortUrl': shortUrl});
	}
	// No： 先保存长URl，然后编码之后发送  
	else 
	{
		console.log("longUrl: " + longUrl +"is not existed");
	 	var newUrl = Url({
	    long_url: longUrl
	 	});
	 	newUrl.save(function(err) {
	    if (err){
	      console.log(err);
	    }

	    shortUrl = config.webhost + base58.encode(newUrl._id);

	    res.send({'shortUrl': shortUrl});
	 	});
	}

	});
});
// 三，响应短连接的请求，get
app.get('/:short_url', function(req,res){
	// 在响应函数里面执行
	// 1, 先解码
	var base58 = req.params.short_url;
	var id = base58.decode(base58Id);
	// 2，查询数据库是否存在这样的long_url ?
	Url.findOne({_id: id}, function (err, doc){
		if(doc)
		{	// yes, 重定向到长_url
			res.redirect(doc.long_url);
		}
		else
		{	// no, 重定向到liaoyuan.io
			res.redirect(config.liaoyuan);
		}
	});

});


var server = app.listen(3000, function(){
	console.log('Thank you for using URL Shortener');
	console.log('This application is used for Liaoyuan Test Only');
	console.log('Author: Xiangyu Zhang');
  	console.log('Server listening on port 3000');
});