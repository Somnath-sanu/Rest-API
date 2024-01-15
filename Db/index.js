import mongoose from "mongoose";
import { DB_NAME } from '../contants.js'

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    // console.log(connectionInstance)
    console.log(`MongoDB is Connected!! DB host : ${connectionInstance.connection.host}`)

  } catch (error) {
    console.log("MongoDB Connection Failed ",error)
    process.exit(1);
  }
}


export default connectDB;