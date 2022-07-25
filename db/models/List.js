require("../connect.js")
const mongoose = require("mongoose")

const { Schema, model } = mongoose

const listSchema = new Schema({
    data : [
        {
            Name : String,
            Revenue : Number 
        }
    ]
});

const List = mongoose.models.list || model('list', listSchema)
module.exports = List

