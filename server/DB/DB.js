const mongoose=require('mongoose')

async function init(){
      try{
             await mongoose.connect('mongodb+srv://pro:pro@cluster0.rkmrk.mongodb.net/?retryWrites=true&w=majority')
             console.log("Database is connected")
      }catch(err){
          console.log(err)
      }
}

module.exports=init

