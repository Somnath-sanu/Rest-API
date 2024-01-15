import mongoose  from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name : {
      type : String,
      required : true,
    },
    price : {
      type : Number,
      required : [true , "price must be provided"]
    },
    featured : {
      type : Boolean,
      default : false
    },
    rating : {
      type : Number,
      default : 4.9,
    },
    
    company : {
      type : String,
      enum : ["apple" , "samsung" , "dell" , "mi"]
    }
  },
  {timestamps : true})


  export const Product = mongoose.model("Product" , productSchema);

  /**
   * ! enum : {
   * !  values : ["apple" , "samsung" , "dell" , "mi"],
   * ! message : `${VALUE} is not supported`
   }
   */