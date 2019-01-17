const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
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

app.listen('3001', () => {
  console.log("Running on port 3001");
});