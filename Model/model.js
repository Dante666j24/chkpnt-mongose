const mongoose = require('mongoose')
const {Schema} = mongoose;

const CandySchema = new Schema({
    title: {type:String,required:true},
    price: {type:Number}
})

const CandyDB = mongoose.model("Candy",CandySchema)

module.exports = CandyDB
