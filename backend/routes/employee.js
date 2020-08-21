var express = require("express");
var router = express.Router();
const {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployees,
} = require("../controllers/Employee");

router.get("/", getAllEmployees);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
