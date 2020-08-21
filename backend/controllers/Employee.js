const Employee = require("../models/Employee");

exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json({ success: true, employee });
  } catch (error) {
    res.status(400).json({ success: false, error: "internal error" });
  }
};

exports.updateEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, employee });
  } catch (error) {
    res.status(400).json({ success: false, error: "internal error" });
  }
};

exports.deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findByIdAndDelete(id, req.body);
    res.status(200).json({
      success: true,
      msg: `${employee.name} details deleted successfully`,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: "internal error" });
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    const allEmployee = await Employee.find({});
    res.status(200).json({ success: true, allEmployee });
  } catch (error) {
    res.status(400).json({ success: false, error: "internal error" });
  }
};
