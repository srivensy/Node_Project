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
  }
 
  
}
