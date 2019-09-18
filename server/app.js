var express=require('express');
var mysql=require('mysql');
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({ extended: false })); //解析表单数据
app.use(bodyParser.json()); //解析JSON数据格式
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send('200');  //让options尝试请求快速结束
    else
        next();
});
var pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kuaidi',
    multipleStatements:true
});
app.get('/slider',function (req,res) {
    pool.getConnection(function (error,connection) {
        connection.query("SELECT * FROM slider", function (error, results) {
            if (error){
                return console.log(error);
            }
            var data=JSON.stringify(results);
            res.end(data);
        });
        connection.release();
    });
});
app.post('/login',function (req,res) {
    pool.getConnection(function (error,connection) {
        connection.query("select * from users where Name="+'"'+req.body.name+'"'+' and '+"Password="+'"'+req.body.password+'"',function (error,results) {
            if(error){
                console.log(error)
            }
            var data=JSON.stringify(results);
            res.end(data);
        });
        connection.release();
    })
});
app.post('/register',function (req,res) {
    pool.getConnection(function (error,connection) {
        connection.query("insert into users(Name,Password) values("+'"'+req.body.name+'"'+","+'"'+req.body.password+'"'+")",function (error,results) {
            if(error){
                console.log(error)
            }
            var data=JSON.stringify(results);
            res.end(data);
        });
        connection.release();
    })
});
app.get('/orders',function (req,res) {
    //console.log(req.query);
    pool.getConnection(function (error,connection) {
        connection.query("select * from orders where username="+'"'+req.query.username+'"',function (error,results) {
            if(error){
                console.log(error)
            }
            var data=JSON.stringify(results);
            res.end(data);
        });
        connection.release();
    })
});
app.post('/addOrder',function (req,res) {
    var date=new Date();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var time=(month+'/'+day+' '+hour+':'+minute).toString();
    pool.getConnection(function (error,connection) {
        connection.query('insert into orders(username,num,sort,time,status) values('+'"'+req.body.name+'"'+','+'"'+req.body.num+'"'+','+'"'+req.body.value+'"'+','+'"'+time+'"'+','+'"'+'派送中'+'"'+')',function (error,results) {
            if(error){
                console.log(error)
            }
            var data=JSON.stringify(results);
            res.end(data);
        });
        connection.release();
    });
});
app.post('/confirm',function (req,res) {
    pool.getConnection(function (error,connection) {
        connection.query("UPDATE orders SET `status`='已完成' WHERE guid="+req.body.guid,function (error,results) {
            if(error){
                console.log(error)
            }
            var data=JSON.stringify(results);
            res.end(data);
        });
        connection.release();
    })
});
app.listen(5000, function () {
    console.log('running 5000...');
});