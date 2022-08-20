//引入myaql模块
const mysql=require('mysql')
//创建连接池对象
const pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'qy',
	connectionLimit:'15',
	multipleStatements:true
})
//暴露出去
module.exports=pool