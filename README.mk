部署方法

默认的环境是已经安装 NPM, NodeJS (或者 Node,视平台而定),还有 MongoDB。

1. 拷贝仓库 https://github.com/xiangyuzhang/liaoyuan_URL.git 
2. 安装依赖 
	$ npm install express –-save 
	$ npm install body-parser --save 
	$ npm install mongoose –-save 
3. 打开并创建数据库 在终端输入 
	$ mongo $ use url_shortener (在程序里,我默认数据库是 url_shortener, 可以 在配置文件 config.js 里面修改,但不建议)
	$ db.counters.insert({_id:’url_count’, seq:1})(这一步是为了创建 一个 counter,我尝试过在后端自动创建,但是似乎不行。在数据库里面 直接创建可以解决这个问题)
4. 根据需求更改配置文件 config.js 
5. 运行: 
	$ node(或者 nodejs) app.js

实例：
	http://broccoli.ecs.umass.edu:3000
