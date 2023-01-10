import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description: {
        type: String,
        required: true,
      }
})
export default mongoose.model("todo", todoSchema);