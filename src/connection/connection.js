const mongoose=require('mongoose')

const  createDb=async()=>{
    mongoose.connect('mongodb://localhost:27017/login-role').then((data)=>{
        console.log('database is done')
    }).catch((error)=>{
        console.log('fail')
    })
}

module.exports={createDb}