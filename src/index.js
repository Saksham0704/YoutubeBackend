import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
}
    
)

connectDB()








//basic approach to connect mongodb and express but it violates too many things at a single place
// import express from 'express'

// const app= express()

// (async () => {
//     try{
// await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// app.on("error", (error) => {
//     console.log("ERRR: ", error);
//     throw error
// })
// app.listen(process.env.PORT, ()=>{
//     console.log(`App running on port ${process.env.PORT}`)
// })
//     }
//     catch(error){ 
// console.error("ERROR: ",error)
// throw err
//     }
// })()