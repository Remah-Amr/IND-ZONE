const express = require("express");
const ctrls = require("../../controllers");
const policies = require('../../policies')
let router = express.Router();

router.post('/register/employee',policies.isAllowed('admin'),ctrls.AdminCtrl.addEmployee)
router.get('/employees',policies.isAllowed('admin'),ctrls.AdminCtrl.fetchEmployee)
router.delete('/employees/:id',policies.isAllowed('admin'),ctrls.AdminCtrl.removeEmployee)

module.exports = router;
