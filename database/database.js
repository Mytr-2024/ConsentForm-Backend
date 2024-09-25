import mongoose from 'mongoose'

export const connectToMongo=async()=>{
try {
   const conn= await mongoose.connect(process.env.DB_URL)
//    const conn= await mongoose.connect("mongodb://127.0.0.1:27017/DB")
   console.log("Database Connected")
} catch (error) {
    console.log(error)
}
}
