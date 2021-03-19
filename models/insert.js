require('../db')

var mongoose = require("mongoose")
mongoose.Promise = require("bluebird")
var Schema = mongoose.Schema
var PostSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
    },{timestamps: true})

module.exports = mongoose.model("Post1", PostSchema)

