const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Welcome to my app");

});

app.listen(7050, function() {
    console.log("app listening port 7050");


});