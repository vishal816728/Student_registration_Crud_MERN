const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
        registrationNumber:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        grade:{
            type:String,
            required:true
        },
        section:{
            type:String,
          
        }
})

module.exports=mongoose.model('Students',studentSchema)