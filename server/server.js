const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const cors=require('cors')

const init=require("./DB/DB")
const router=require("./routes/Student.Router")
//connecting to the Database
init()

//middleware
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json({extended:true}))
app.use(express.json())
app.use("/student",router)

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`port is listenin to ${PORT}`)
})