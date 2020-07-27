var mysql = require('mysql');
const express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { response } = require('express');
const router = express.Router();
var app = express();


// sets up connection to db
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'budgetVotes'
});

//connect to database
connection.connect();

//listens to posts request to database
app.post('/taxBrackets', function(req, res){
  //gets sent data
  var taxBracket = req.body;
  //does a MySQL query
  var query = connection.query('INSERT INTO taxBrackets SET ?', taxBracket, function(err, result){

  });
  res.end('Success');
});

app.listen(3000, function(){
  console.log('app listening on port 3000!');
});