var express = require("express")
var router = express.Router()
router.use(express.json())
var Post1 = require("../models/insert")


var server = require('http').Server(router);
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


var insert = function(req, res){
    // console.log(req.body.title)
    // var title1 = req.body.title 
    console.log(req.body)
    Post1.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    }, function(err, result){
        if(err){
            res.json({
                message: 'some error in insert'
                
            })
            console.log(err)
        }
        else if(result){
            res.json({
                message: "result",
                result: result
            })
        }
    })
}

router.post('/insert', insert)

module.exports = router