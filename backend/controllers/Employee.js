const Employee = require("../models/Employee");

exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json({ success: true, employee });
  } catch (error) {
    res.status(400).json({ success: false, error: "internal error" });
  }
};
