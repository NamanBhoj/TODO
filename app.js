const express = require('express');
const app = express();




app.get('/', function(req,res){
    res.write('hey this is working now');
    res.write('Again working');
    res.send();
})


module.exports = app;