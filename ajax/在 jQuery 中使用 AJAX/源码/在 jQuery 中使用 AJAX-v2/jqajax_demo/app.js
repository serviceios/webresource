var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// json类型body
app.use(bodyParser.json());
// query string类型body
app.use(bodyParser.urlencoded({
	extended: false
}));
// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')));


// --------------- BEGIN ROUTES ------------------
app.use('/', require('./routes/index.js'));
app.use('/user', require('./routes/user.js'));
// --------------- END ROUTES --------------------

// 启动端口
var DEFAULT_PORT = 80;
app.listen(DEFAULT_PORT);
console.log('启动端口: %d', DEFAULT_PORT);