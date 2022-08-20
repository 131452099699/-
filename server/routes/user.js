//引入express模块
const express=require('express')
//引入连接池模块
const pool=require('../pool.js')
//创建路由器对象
const r=express.Router()


//用户注册接口(post /reg)
//接口地址:http://127.0.0.1:9000/v1/users/reg
//请求方式:post
r.post('/reg',(req,res,next)=>{
    var obj=req.body
    // console.log(obj);
    // 验证用户名
    if(!obj.uname){
        return res.send({code:401,msg:'uname不能为空'})
    }
    // 验证密码
    if(!obj.upwd){
		return res.send({code:402,msg:'upwd不能为空'})
	}
    // 验证手机号
    if(!/^1[3-9][0-9]{9}$/.test(obj.phone)){
        return res.send({code:403,msg:'手机号格式错误'})
}
    //执行sql命令，将数据插入到数据库
    pool.query('insert into qy_user set ?' ,[obj],(err,r)=>{
        if(err){
            return next(err)
        }
        console.log(r);
        res.send({code:200,msg:'注册成功'})
    })

})
//用户登录接口(post /login)
//接口地址:http://127.0.0.1:9000/v1/users/login
//请求方式:post
r.post('/login',(req,res,next)=>{
	var obj=req.body
	console.log(obj)
	//执行sql命令，到数据库中 查询是否存在用户名和密码同时匹配的数据
	pool.query('select * from qy_user where uname=? && upwd=?',[obj.uname,obj.upwd],(err,r)=>{
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
//删除用户接口(post /reg)
//接口地址:http://127.0.0.1:9000/v1/users/:uid
//请求方式:delete
r.delete('/:uid',(req,res,next)=>{
	console.log(req.params)
	pool.query('delete from qy_user where uid=?',[req.params.uid],(err)=>{
		if(err){
			return next(err)
		}
		console.log(r)
		if(r.affectedRows===0){
			res.send({code:501,msg:'删除失败'})
		}else{
			res.send({code:200,msg:'删除成功'})
		}
	})
})

//暴露路由器对象
module.exports=r