const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_DATABASE
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

let testResult;

app.get('/test', (req, res) => {
  let sql = 'SELECT * FROM new_schema.npcs';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log("result: ", result);
    testResult = result;
    res.send('test res.send');
  });
});

app.listen('3001', () => {
  console.log("Listening on port 3001");
});