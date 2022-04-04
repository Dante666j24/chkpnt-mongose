const express = require("express");
const connectDB = require("./DB/connectDB")
const CandyDB = require('./Model/model')

//Save New Candy
// const Candy = new CandyDB({title:"Starburst",price:1})
// Candy.save((err)=>{
//     if(err) return handleError(err)
//    //save
//})

//find All
//const search =async()=>{
//    try {
//        const data = await CandyDB.find({title:"Starburst"});
//        console.log(data)
//    } catch (err) {
//        console.log(err)

//    }
//}
//search()

//Update
// const query = {_id:"624a65d742db1f51c37ad497"}
// const UpdateCandy =async()=>{
//      await CandyDB.findOneAndUpdate(query,{title:"Starburst"},(err,data)=>{
//          try {
//              console.log("Updated")
//          } catch (err) {
//              console.log(err)
//          }
//      })
// }

// UpdateCandy()

//Find One And Delete
const Delete =async()=>{
    await CandyDB.findOneAndDelete({_id:"624a62cfc40e3e1591f839b3"},(err,data)=>{
        try {
            console.log("removed Data", data)
        } catch (err) {
            console.log(err)
        }
    })
}
Delete()


connectDB()

const app = express();

const PORT = 3000;

app.listen(PORT,(err)=>{
    err?
    console.log(err)
    : console.log(`server is running in ${PORT}...`)
})