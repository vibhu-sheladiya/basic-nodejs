const mongoose=require('mongoose')

const adressSchema=new mongoose.Schema({
 name:{
    type:String,
    trim:true,
 },
 user:{
    type:mongoose.Schema.Types.String,
    ref:'user'
 }
},{
    timeStamp:true,
    versionKey:false,
}

)
const Adress=mongoose.model('adress',adressSchema);
module.exports = Adress;  
