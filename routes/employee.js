const express = require("express");
const router = express.Router();

const {getEmployee, getEmployees} = require("../controllers/employee");

router.get('/', getEmployees);
router.get('/:id', getEmployee);

module.exports = router;


