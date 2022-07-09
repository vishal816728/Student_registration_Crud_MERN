const express=require('express')
const router=express.Router()
const studentcontroller=require("../controller/student.controller")
const studentPostController=require("../controller/studentpost.controller")

router.get("/",studentcontroller)
router.post("/",studentPostController)
module.exports=router
