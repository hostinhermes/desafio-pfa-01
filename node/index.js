const express = require("express");
const bodyParser = require("body-parser");
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'root',
  database : 'pfa'
});
connection.connect();


const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
   

    connection.query('SELECT * from fullcycle_modules', function(err, modules, fields) {
       
        res.json({ modules });
    });

   
    
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});