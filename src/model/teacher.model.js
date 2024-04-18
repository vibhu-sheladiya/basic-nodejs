const mongoose=require('mongoose')

const teacherSchema=new mongoose.Schema({
 name:{
    type:String,
    trim:true,
 },
 token:{
    type:String,
 },
 email:{
    type:String,
 },

 password:{
    type:String,
 },

role:{
   type:String,
   // enum:['user','admin']
   
 },
 image:{
   type:String
 },
 mobile:{
    type:Number,  //10 digits only
    minlength:10,
 }
},{
    timeStamp:true,
    versionKey:false,
}

)
const Teacher=mongoose.model('teacher',teacherSchema);
module.exports = Teacher;  
