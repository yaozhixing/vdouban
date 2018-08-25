var express = require("express");
var app = express();
var http = require("http").Server(app);

const request = require("superagent");

const HOST = 'http://api.douban.com/v2'

//配置端口号
var port = (process.env.PORT || 8021);

//静态文件加载
app.use('/public', express.static('public'));

/**
 * CORS support.
 */
app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.set("Content-Type", "application/json;charset=utf-8");
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.get("/",function (req,res,next) {
    res.sendFile( __dirname + "/views/index.html" )
});

/*热门*/
app.get('/api/movie/in_theaters', function (req, res) {
  let ori_url = cutUrl(req.originalUrl);
  let sreq = request.get( HOST + ori_url )
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

/*即将上映*/
app.get('/api/movie/coming_soon', function (req, res) {
  let ori_url = cutUrl(req.originalUrl);
  let sreq = request.get( HOST + ori_url )
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

/*最新电影*/
app.get('/api/movie/new_movies', function (req, res) {
  let ori_url = cutUrl(req.originalUrl);
  let sreq = request.get( HOST + ori_url )
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

/*电影推荐*/
app.get('/api/movie/top250', function (req, res) {
  let ori_url = cutUrl(req.originalUrl);
  let sreq = request.get( HOST + ori_url )
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

/*电影内容信息*/
app.get('/api/movie/subject/:id', function (req, res) {
  let ori_url = cutUrl(req.originalUrl);
  let sreq = request.get( HOST + ori_url )
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

/*截取url， /api/movie/in_theaters => /movie/in_theaters */
function cutUrl(url) {
	if(url.indexOf('/api') >= -1){
		return url.substr(4);
	}
	else{
		return url;
	}
}

http.listen(port);