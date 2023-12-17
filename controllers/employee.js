const Employee = require("../models/Employee");



// @desc get employee list
// @route GET /api/v1/employee
// @access public
exports.getEmployees = async (req, res) => {
    let employees = await Employee.find({}).lean();
    return res.status(200).json({success:true, data:employees});

}

// @desc get employee by id
// @route GET /api/v1/employee/:id
// @access public
exports.getEmployee = async (req, res) => {
    let employee = await Employee.findById(req.params.id).lean();
    return res.status(200).json({success:true, data:employee});

}