const studentModel=require("../model/Schema")

const studentcontroller=async (req,res)=>{
          try{
                       const getStudents=await studentModel.find()
                       res.status(200).json(getStudents)
          }catch(err){
              console.log("error 404")
              res.status(200),json({
                  "Error":"Not Found"
              })
          }
}



module.exports=studentcontroller