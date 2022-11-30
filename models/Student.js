import mongoose from "mongoose";

// Defining Schema
const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true, min:18, max:60},
    name:{type:mongoose.Decimal128, required:true, validate:
        (value)=> value >= 5000.5}

})

// Model

const StudentModle = mongoose.model("student", studentSchema)

export default StudentModle