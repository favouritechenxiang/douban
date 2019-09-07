//引入模块
let express = require('express');
let app = express();
let crypto = require('crypto');
let mongoose = require('mongoose');

//解决跨域
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next()
})

//创建集合
let dbCollection = mongoose.model("doubans",{
    useremail:String,
    userpass:String,
    username:String
})

app.get("/zhuce",function(req,res){
    //获得前端数据
    var useremail = req.query.useremail;
    var userpass = req.query.userpass;
    var username = req.query.username;
    console.log(useremail);
    console.log(userpass);
    console.log(username);
    //加密
    var newpass = crypto.createHash('md5').update(userpass).digest('hex');
    console.log(newpass);
    //然后连接数据库
    mongoose.connect("mongodb://localhost:27017/lulu",{useNewUrlParser:true},function(err){
        if(err){
            console.log("连接失败");
        }else{
            console.log("连接成功");
            //设置存储的数据
            var usedb = new dbCollection({
                useremail:useremail,
                userpass:newpass,
                username:username
            })
            //开始往数据库存储数据
            usedb.save().then((ok)=>{
                res.send({status:200,msg:"注册成功",linkid:1})
            },(err)=>{
                res.send({status:200,msg:"注册失败",linkid:2})
            })
        }
    })
})
app.listen(3000);

