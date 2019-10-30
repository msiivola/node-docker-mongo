const express = require('express');
const app = express();
const db = require('./db');

var bodyParser = require('body-parser');
app.use(bodyParser());

var port = process.env.PORT || 4000;

const {
    NODE_ENV,
    //MONGO_USERNAME,
    //MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DATABASE_NAME
  } = process.env;

// console.log('process env:', process.env);
// console.log(NODE_ENV, MONGO_HOSTNAME, MONGO_PORT, MONGO_DATABASE_NAME);

app.get("/", function(req, res){
    res.json({"hello":"Hello worldi!"});
});
  
app.listen(port, function() {
    //var port = server.address().port;
    console.log("Server running on port", port);
});