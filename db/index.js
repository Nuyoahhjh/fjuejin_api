const mysql = require('mysql')

const db = mysql.createPool({
  host: '',  //数据库的IP地址
  port: '',       //数据库的端口号
  user: '',       //登录数据库的账号
  password: '', //登录数据库的密码
  database: ''     //指定要操作哪个数据库
})

module.exports = db
