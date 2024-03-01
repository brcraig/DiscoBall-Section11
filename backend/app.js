// code from previous course for database connection
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// // encription algorithm
// var encriptacion_1 = require("./encriptacion");
// var express = require('express');
// var mysql = require("mysql");
// var app = express();
// //cors
// var cors = require('cors');
// var axios = require('axios'); // necessary for the captcha 
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
// app.use(cors());
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Hola1234',
//     port: 3306,
//     database: 'CelebratoryTech'
// });
// connection.connect(function (err) {
//     if (err) {
//         console.error('Error connecting to the database' + err.stack);
//         return;
//     }
//     console.log('Connection established' + connection.threadId);
// });
// //creamos servidor
// var configuration = {
//     hostname: "127.0.0.1",
//     port: 3000,
// };

// chatgpt code 
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hola1234', // Enter your MySQL password here
  port:3000,
  database: 'CelebratoryTech'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Execute SQL query
connection.query('SELECT * FROM your_table', (err, results, fields) => {
  if (err) {
    console.error('Error executing query: ' + err.stack);
    return;
  }
  console.log('Query results:', results);
});

// Close the connection
connection.end();

// how to get the database entries if working through node 
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.json(results);
    });
  });