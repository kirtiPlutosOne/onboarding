const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req,res,next) => {
    const { username,email,password, isAdmin } = req.body;

    try { 
    const userExist = await User.findAll({where : {email}})
    console.log(userExist)

    if(userExist.length > 0){
        res.status(500).json({ errormsg: 'User already exists with this email Id'})
    } else {
        const saltrounds = 10;
        bcrypt.hash(password,saltrounds, async(err,hash) => {
            const user = await User.create({
                username: username,
                email: email,
                password: hash, 
                isAdmin
            })
                res.status(201).json({successMsg:'User created successfully',user})
        }) 
    } 
 } catch(err){
            res.status(500).json({failMsg: 'User not created', message: err.message})
        }
        
}

function generateAccessToken(id){
    return jwt.sign({userId:id},'voucherManagementSystemVMSKey');
}

exports.login = async (req,res,next) => {
    const { email, password } = req.body;

try {
    const registeruserExist = await User.findAll({where: {email: email}})

    if(registeruserExist && registeruserExist.length){
        bcrypt.compare(password, registeruserExist[0].password,(err,result) => {
            if(result == true){
                return res.status(201).json({successMsg: 'User logged in successfully',token: generateAccessToken(registeruserExist[0].id)})
                
            } else {
                return res.status(401).json({errMsg: 'You entered wrong password. Try again', err: err})
            }
        })
    } else {
        res.status(404).json({errorMsg: 'User does not exist'})
    }
} catch (error) {
    res.status(500).json({errorMsg: error.message})
}
    
}

exports.update = async(req,res,next) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({message: 'Content can not be empty'})
    }
    const customerId = req.params.id;
        try {
            const customer = await User.update(req.body, {where : {id: customerId}});
            res.status(200).json({ message: 'Customer updated successfully' , success: true});
            
        } catch (err) { 
            res.status(500).json({ message: err.message, success: false})
         }
}

exports.delete = async(req,res,next) => {
    try {
        const customerId = req.params.id;
        const deleteCustomer = await User.destroy({where: {id: customerId}}) 

        return res.status(200).json({message:'Customer deleted successfully', success: true});
    } catch(err) {
        res.status(500).json({ message: err.message, success: false})
    }
}