import Employee from "../models/Employee.js"

export const employeeController = {
  createEmployee: async (req, res) => {
    try {
      const { name, email, phone, city } = req.body

      const employee = new Employee({
        name,
        email,
        phone,
        city
      })

      await employee.save()
      res.status(201).json(employee)

    } catch (error) {
      console.error("Error in employee controller:", error)
      res.status(500).json({ message: "Server error" })
    }
  },
  getEmployee: async(req,res)=>{
    try{
      const employee = await Employee.find()
      res.status(200).json(employee)
    }catch{
      console.error("This is an error",error)
      res.status(500).json({message:"servererror"})
    }
  },
  getsingleEmployee:async(req,res)=>{
    try{
      const employee = await Employee.findById(req.params.id)
      if(!employee){
        return res.status(404).json({message:"Employee not found"})
      }
      res.status(200).json(employee)
    }catch(error){
      console.log("there is an error occured",error)
      res.status(500).json({message:"backend error"})
    }
  },
  updateEmployee:async(req,res)=>{
    try{
      const {name,email,phone,city}=req.body

      const employee = await Employee.findByIdAndUpdate(req.params.id,{name,email,phone,city})
        
      if(!employee){
        return res.status(404).json({message:"employee not found"})
      }
      res.status(200).json(employee)
    }catch(error){
      console.log("there is a backend error",error)
      res.status(500).json({message:"backend error (server"})
    }
  },
  deleteEmployee:async(req,res)=>{
    try{
      const delete_employee=await Employee.findByIdAndDelete(req.params.id)
      res.status(204).send(delete_employee)
    }catch(error){
      console.error("there is no data found:",error)
      res.status(500).json({message:"no data found in the server"})
    }
  }
 
  
}
