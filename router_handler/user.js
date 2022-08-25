// 导入数据库操作模块
const db = require('../db/index')


exports.list = (req, res) => {
  if (req.body.Teamnumber == '' || req.body.Teamnumber !== '71744') {
    return res.json({
      status: 401,
      msg: '请传递正确的Teamnumber验证身份'
    })
  }
  const sql = 'select en_articles.id,username as author,pub_date as date,title,content as text from en_articles join en_users on author_id = en_users.id where is_delete = 0'
  db.query(sql, (err, results) => {
    if (err) return console.log('查询所有文章数据失败');
    res.json({
      status: 200,
      results
    })
  })
}

exports.article = (req, res) => {
  const sql = 'select username as author,pub_date as date,title,content as text from en_articles join en_users on author_id = en_users.id where is_delete = 0 and en_articles.id = ?'
  db.query(sql, [req.query.id], (err, results) => {
    if (err) return console.log('查询文章详情失败');
    res.json({
      status: 200,
      results
    })
  })
}