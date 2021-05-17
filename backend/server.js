const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const https = require('https');
var serveStatic = require('serve-static');
var mcache = require('memory-cache');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, '../build')));

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, '../build')));
    app.get('*', (req, res) => {

        res.sendfile(path.join(__dirname = '../build/index.html'));
    })
}



app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname + '../build/index.html'));
})


app.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});