import mongoose from "mongoose"
const subtodoSchema = new mongoose.Schema({
  content:{
    type:string,
    required:true
  },
  complete:{
    type:boolean,
    default:false
  },
  createdBy:{
type:mongoose.Schema.Types.ObjectId,
ref:'user',
  }
},{timestamps:true})
export const user = mongoose.model("Subtodo",subtodoSchema)