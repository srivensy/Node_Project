import express from "express"
import { employeeController } from "../controllers/EmployeeController.js"

const router = express.Router()

router.post("/add_employee", employeeController.createEmployee)
router.get("/get_all_employee",employeeController.getEmployee)
router.get("/employee/:id",employeeController.getsingleEmployee)
router.put('/update/:id',employeeController.updateEmployee)
router.delete('/delete/:id',employeeController.deleteEmployee)

export default router
