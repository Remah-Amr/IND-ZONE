const express = require("express");
const ctrls = require("../../controllers");
const policies = require('../../policies')
let router = express.Router();

router.post('/order',policies.isAllowed('customer'),ctrls.OrderCtrl.createOrder)

router.get('/orders',policies.isAllowed(['admin','secretary']),ctrls.OrderCtrl.fetchAll)
router.get('/orders/:id',policies.isAllowed(['admin','secretary']),ctrls.OrderCtrl.fetchOne)

module.exports = router;
