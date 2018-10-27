var express = require("express");
var path = require("path");
var connection = require("./db/connection");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
  
app.get("/api/tables", function(req, res) {
    connection.query("SELECT * FROM tables", function(err, data) {
      res.json(data);
    });
});

app.get("/api/reservations", function(req, res) {
    connection.query("SELECT * FROM tables WHERE isWaiting = 1", function(err, data) {
      res.json(data);
    });
});
  
app.post("/api/reserve", function(req, res) {
    console.log("req.body:", req.body);
  
    connection.query("INSERT INTO tables SET ?", req.body, function(err, result) {
      if (err) throw err;
  
      res.json(result);
    });
});
  
app.listen(PORT, function() {
    console.log("Server running on PORT: " + PORT);
});
  
  