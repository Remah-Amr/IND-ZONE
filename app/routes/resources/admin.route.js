const express = require("express");
const ctrls = require("../../controllers");
const policies = require('../../policies')
let router = express.Router();

router.post('/register/employee',policies.isAllowed('admin'),ctrls.AdminCtrl.addEmployee)

module.exports = router;
