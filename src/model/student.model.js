const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
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
// 1-user 2= teacher 3= student
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
const Student=mongoose.model('student',studentSchema);
module.exports = Student;  
