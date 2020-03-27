const mysql = require('mysql');
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hg77ho05_suporte'
});

db.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
});


module.exports = db;