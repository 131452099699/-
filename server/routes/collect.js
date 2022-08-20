//引入express模块
const express=require('express')
//引入连接池模块
const pool=require('../pool.js')
//创建路由器对象
const r=express.Router()

// 插入数据
//接口地址:http://127.0.0.1:9000/v1/collects/collect
//请求方式:post
r.post('/collect',(req,res,next)=>{
    var obj=req.body
    console.log(obj);
    pool.query('insert into qy_collect set ?' ,[obj],(err,r)=>{
        if(err){
            return next(err)
        }
        console.log(r);
        res.send({code:200,msg:'添加成功',data:r})
    })
})
// 查询插入到收藏页面的数据
//接口地址:http://127.0.0.1:9000/v1/collects/collects
//请求方式:get
r.get('/collects',(req,res,next)=>{
    var obj=req.query
    console.log(obj);
    pool.query('select * from  qy_collect' ,[obj],(err,r)=>{
        if(err){
            return next(err)
        }
        console.log(r);
        res.send({code:200,msg:'查询成功',data:r})
    })
})
// 查数据
//接口地址:http://127.0.0.1:9000/v1/collects/hotels
//请求方式:get
r.get('/hotels',(req,res,next)=>{
    var obj=req.query
    console.log(obj);
    pool.query('select * from qy_hotel where hid= ?' ,[obj.hid],(err,r)=>{
        if(err){
            return next(err)
        }
        console.log(r);
        res.send({code:200,msg:'查询成功',data:r})
    })
})
// 删除数据接口
//接口地址:http://127.0.0.1:9000/v1/collects/:h1id
//请求方式:delete
r.delete('/:h1id',(req,res,next)=>{
	console.log(req.params)
	pool.query('delete from qy_collect where h1id=?',[req.params.h1id],(err)=>{
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