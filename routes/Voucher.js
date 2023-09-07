const express = require('express');
const voucherControls = require('../controllers/Voucher')
const Router = express.Router();
const authControls = require('../middleware/auth')
const upload = require('../middleware/upload')

Router.post('/createVoucher', upload.single("file"),authControls.authenticate, voucherControls.createVoucher)
Router.get('/getVoucherOfType', voucherControls.getVoucherOfType)
Router.get('/getAllVouchers', voucherControls.getAllVouchers)
Router.put('/updateVoucher/:id',authControls.authenticate, voucherControls.updateVoucher)
Router.delete('/deleteVoucher/:id',authControls.authenticate, voucherControls.deleteVoucher)
Router.get('/claimVoucher/:id', voucherControls.claimVoucher)

module.exports = Router;