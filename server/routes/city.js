//引入express模块
const express=require('express')
//引入连接池模块
const pool=require('../pool.js')
//创建路由器对象
const r=express.Router()

//接口地址:http://127.0.0.1:9000/v1/cities/city
//请求方式:get
r.get('/city',(req,res,next)=>{
    var obj=req.query
    // console.log(obj);
    pool.query('select * from qy_city' ,[obj],(err,r)=>{
        if(err){
            return next(err)
        }
        console.log(r);
        res.send({code:200,msg:'查询成功',data:r})
    })
})

//接口地址:http://127.0.0.1:9000/v1/cities/search
//请求方式:get
r.get('/search',(req,res,next)=>{
    var obj=req.query
    // console.log(obj);
    pool.query('select * from qy_city where cid=?' ,[obj.cid],(err,r)=>{
        if(err){
            return next(err)
        }
        console.log(r);
        res.send({code:200,msg:'查询成功',data:r})
    })
})

// 根据城市的名字查询
//接口地址:http://127.0.0.1:9000/v1/cities/select
//请求方式:get
r.get('/select',(req,res,next)=>{
    var obj=req.query
    // console.log(obj);
    pool.query('select * from qy_city where ctitle2= ? ' ,[obj.ctitle2],(err,r)=>{
        if(err){
            return next(err)
        }
        console.log(r);
        if(r.length===0){
			res.send({code:501,msg:'查询失败'})
		}else{
			res.send({code:200,msg:'查询成功',data:r})
		}
      
    })
})


//暴露路由器对象
module.exports=r