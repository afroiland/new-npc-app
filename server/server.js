const express = require('express');
const mysql = require('mysql');

//TODO: create config file for pw
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '321mmm_AA*',
  database : 'new_schema'
});

db.connect((err) => {
  if(err) {
    console.log("err: ", err);
    throw err;
  }
  console.log("db connected");
});

const app = express();

app.set("port", process.env.PORT || 3001);

app.get('/test', (req, res) => {
  let sql = 'SELECT * FROM new_schema.npcs';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log("result: ", result);
    res.send('test res.send');
  });
});

app.listen('3001', () => {
  console.log("Running on port 3001");
});