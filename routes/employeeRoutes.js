import express from "express"
import { employeeController } from "../controllers/EmployeeController.js"

const router = express.Router()

router.post("/add_employee", employeeController.createEmployee)

export default router
