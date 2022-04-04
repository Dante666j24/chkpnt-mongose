const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/CandyShop', {useNewUrlParser: true},{useUnifiedTopology: true});
    } catch (error) {
        handleError(error) 
    }
}

module.exports=connectDB