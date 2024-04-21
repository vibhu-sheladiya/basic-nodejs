const mongoose=require('mongoose')

const ratingSchema=new mongoose.Schema({
teacherid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'teacher'
},studentid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'student'
}

},{
    timeStamp:true,
    versionKey:false,
}

)
const Rating=mongoose.model('teacher',ratingSchema);
module.exports = Rating;  
