const express = require("express");
const router = express.Router();
const employeeRoutes = require("./employee");


router.use('/api/v1/employee', employeeRoutes);

module.exports = router;