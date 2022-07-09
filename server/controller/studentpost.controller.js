const studentModel=require("../model/Schema")

const studentPostController=async(req,res)=>{
    const body=req.body
        const registration=await studentModel.findOne({registrationNumber:req.body.registrationNumber})
        console.log(registration)
    if(!registration){
        const newStudent=new studentModel(body)
    
    try {
        await newStudent.save()
        res.status(200).json(newStudent)
    } catch (error) {
        console.log(error)
        res.status(200).json({
            "error":"Something went wrong"
        })
    }
}
}

module.exports=studentPostController