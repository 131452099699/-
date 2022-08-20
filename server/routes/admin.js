//引入express模块
const express=require('express');
//引入pool.js模块
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();

// 管理员注册接口
//接口地址:http://127.0.0.1:9000/v1/admin/reg
//请求方式:post
r.post('/reg',(req,res,next)=>{
    var obj=req.body
    console.log(obj);
      // 验证用户名
    if(!obj.rootname){
        return res.send({code:401,msg:'uname不能为空'})
    }
    // 验证密码
    if(!obj.rootpwd){
		return res.send({code:402,msg:'upwd不能为空'})
	}
    //执行sql命令，将数据插入到数据库
    pool.query('insert into qy_admin set ?' ,[obj],(err,r)=>{
        if(err){
            return next(err)
        }
        console.log(r);
        res.send({code:200,msg:'注册成功'})
    })
})

//管理员登录接口(post /login)
//接口地址:http://127.0.0.1:9000/v1/admin/login
//请求方式:post
r.post('/login',(req,res,next)=>{
	var obj=req.body
	console.log(obj)
	//执行sql命令，到数据库中 查询是否存在用户名和密码同时匹配的数据
	pool.query('select * from qy_admin where rootname=? && rootpwd=?',[obj.rootname,obj.rootpwd],(err,r)=>{
		if(err){
			//如果SQL命令存在问题，交给下一个错误处理中间件
			return next(err)
		}
		console.log(r)
		
		if(r.length===0){
			res.send({code:501,msg:'登录失败'})
		}else{
			res.send({code:200,msg:'登录成功'})
		}
	})
})


//暴露路由器对象
module.exports=r