//引入express模块
const express=require('express')
//跨域问题
const cors=require('cors')
//引入用户路由器模块
const ur=require('./routes/user.js')
// 引入管理员路由模块
const ad=require('./routes/admin.js')
// 引入城市路由模块
const ct=require('./routes/city.js')
// 引入酒店路由模块
const ht=require('./routes/hotel.js')
// 引入收藏路由模块
const cl=require('./routes/collect.js')
//创建web服务器
const app=express()
app.use(cors());
//将所有post传参转为对象
app.use(express.urlencoded({
	extended:true
}))
//设置端口
app.listen(9000,()=>{
	console.log('服务器启动成功')
})
//使用用户路由器，给所有的路由添加前缀/v1/users
app.use('/v1/users',ur)
//使用管理员路由器，给所有的路由添加前缀/v1/admin
app.use('/v1/admin',ad)
//使用城市由器，给所有的路由添加前缀/v1/cities
app.use('/v1/cities',ct)
//使用酒店路由器，给所有的路由添加前缀/v1/hotels
app.use('/v1/hotels',ht)
//使用收藏路由器，给所有的路由添加前缀/v1/collects
app.use('/v1/collects',cl)
//添加错误处理中间件，拦截所有路由的错误
app.use((err,req,res,next)=>{
	//err接收到的路由传递的错误
	console.log(err)
	//响应服务器端错误
	res.send({code:500,msg:'服务器端错误'})
})