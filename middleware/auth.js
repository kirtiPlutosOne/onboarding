const jwt = require('jsonwebtoken')
const User = require('../models/User');

const authenticate = async (req,res,next) => {

    try {
        const token = req.header('Authorization')
        console.log(token);
        const user = jwt.verify(token,'voucherManagementSystemVMSKe')
        console.log("userId>>>>>",user.userId)

        const getUser = await User.findByPk(user.userId)
        
        req.user = getUser;
        console.log(req.user)
        next();

    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    authenticate
};