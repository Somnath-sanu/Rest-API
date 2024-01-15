import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config();

const app = express();
app.use(express.json()); 

//! taki request ke json bhej saku nahi to ye error mil rara tha --> TypeError: Cannot destructure property 'name' of 'req.body' as it is undefined.

const Port = process.env.PORT || 4000;


// app.get("/api" , (req,res)=> {
//   res.json({status : "Working"})
// })

connectDB()
  .then(() => {
    app.listen(Port, () => {
      console.log(`App is running on port ${Port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb Connection Failed", err);
  });

  //! Routes 
  
import router from "./Routes/user.routes.js";

app.use("/api/data", router);
