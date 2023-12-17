const Employee = require("../models/Employee");
const myPagination = require("../utils/pagination");



// @desc get employee list
// @route GET /api/v1/employee
// @access public
exports.getEmployees = async (req, res) => {
    const total = await Employee.find({}).countDocuments();
    const { pagination, startIndex, limit } = myPagination({ myPage: req.query.page, myLimit: 10, total });
    let employees = await Employee
        .find({}, {firstName:1, lastName:1, contactNo:1, address:1})
        .skip(startIndex)
        .limit(limit)
        .lean();
    return res.status(200).json({ success: true, total, pagination, data: employees });
}

// @desc get employee by id
// @route GET /api/v1/employee/:id
// @access public
exports.getEmployee = async (req, res) => {
    let employees = await Employee.findById(req.params.id).lean();
    return res.status(200).json({success:true, data:employees});
}