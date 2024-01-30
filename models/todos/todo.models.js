import mongoose from "mongoose"
import { user } from "./sub_models"
const todoSchema = new mongoose.Schema(
  {
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
  ref:"user"
},
subTodos:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Subtodo"
}
}
,{timestamps:true})
export const todo= mongoose.model("todo",todoSchema)