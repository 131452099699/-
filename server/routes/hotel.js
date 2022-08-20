//引入express模块
const express=require('express')
//引入连接池模块
const pool=require('../pool.js')
//创建路由器对象
const r=express.Router()

//接口地址:http://127.0.0.1:9000/v1/hotels/hotel
//请求方式:get
r.get('/hotel',(req,res,next)=>{
    var obj=req.query
    // console.log(obj);
    pool.query('select * from qy_hotel' ,[obj],(err,r)=>{
        if(err){
            return next(err)
        }
        console.log(r);
        res.send({code:200,msg:'查询成功',data:r})
    })
})


//暴露路由器对象
module.exports=r