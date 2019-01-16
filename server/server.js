const express = require('express');
const mysql = require('mysql');

const app = express();

app.set("port", process.env.PORT || 3001);

app.listen('3001', () => {
  console.log("Running on port 3001");
});