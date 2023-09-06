const Voucher = require('../models/Voucher')
const readXlsxFile = require("read-excel-file/node");
const path = require('path');
const __basedir = path.join(__dirname, '/..');;

exports.createVoucher = async (req, res) => {
  try {
    if (req.body){
        const vouchersCreated = await Voucher.create(req.body);
        res.status(200).json({ vouchers: vouchersCreated, success: true})
    } else {
        let path =
        __basedir + "/resources/static/assets/uploads/" + req.file.filename;
  
      readXlsxFile(path).then((rows) => {
        // skip header
        rows.shift();
  
        let Vouchers = [];
  
        rows.forEach((row) => {
          let voucher = {
            id: row[0],
            name: row[1],
            type: row[2],
            code: row[3],
            price: row[4],
            expiry_date: row[5],
          };
  
          Vouchers.push(voucher);
        });
  
        Voucher.bulkCreate(Vouchers)
          .then(() => {
            res.status(200).send({
              message: "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
      });
    }
    
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

exports.getAllVouchers = async (req,res) => {
    try {
        const vouchers = await Voucher.findAll({ attributes: ['name', 'type', 'price', 'expiry_date']});
        res.status(200).json({ allVouchers: vouchers, success: true})

    } catch (err) {
        res.status(500).json({ message: err.message, success: false})
    }
}

exports.getVoucherOfType = async (req,res) => {
    try {
        const { type } = req.body;
        const voucherOfType = await Voucher.findAll({ where : { type }})

        res.status(200).json({ vouchers: voucherOfType, success: true})
    } catch (err) {
        res.status(500).json({ message: err.message, success: false})
    }
}

exports.updateVoucher = async (req,res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({message: 'Content can not be empty'})
    }
    const voucherId = req.params.id;
        try {
                const voucher = await Voucher.update(req.body, {where : {id: voucherId}});
                res.status(200).json({ message: 'Voucher updated successfully' , success: true});
        } catch (err) { 
            res.status(500).json({ message: err.message, success: false})
         }
}

exports.deleteVoucher = async (req,res) => {
    try {
            const voucherId = req.params.id;
            const deleteVoucher = await Voucher.destroy({where: {id: voucherId}}) 

            return res.status(200).json({message:'Voucher deleted successfully', success: true});

    } catch (err) {
        res.status(500).json({ message: err.message, success: false})
    }
}

exports.claimVoucher = async (req,res) => {
    try {
      const voucherId = req.params.id;
      const voucher = await Voucher.findByPk(voucherId)
      // console.log(voucher.code)
       
      res.status(200).status({ voucher, success: true })
    } catch (err) {
      res.status(500).json({ message: err.message, success: false})
    }
}