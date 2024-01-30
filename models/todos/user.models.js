


import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    email:{
      type:string,
      required:true,
      unique:true,
      lowercase:true,
    },
    password:{
      type:String,
      required:true,
      unique:true,

    }
  }, {timestamps:true}
  )
export const User =mongoose.model("user",userSchema)