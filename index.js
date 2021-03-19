var express = require("express")
var app = express()
app.unsubscribe(express.json())
var insert = require("./controller/insert")

var server = require('http').Server(app);
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/name', (req, res, next) => {
    console.log("inside the name api")
    res.json({status: 'got your request'})
})

app.post('/name', (req, res, next) =>{
    res.json({status: "success"})
})

app.post('/get_the_data', (req, res, next) =>{
    console.log(req.body)
    res.json({status: "success"})
})

app.use('/api/insert', insert)

app.listen(3000, () => {
    console.log("Server is running on 3000 port")
})