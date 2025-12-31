import express from "express"
import { employeeController } from "../controllers/EmployeeController.js"

const router = express.Router()

router.post("/add_employee", employeeController.createEmployee)
router.get("/get_all_employee",employeeController.getEmployee)

export default router
