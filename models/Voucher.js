const Sequelize = require('sequelize');
const sequelize = require('../database')

const Voucher = sequelize.define('voucher', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    code: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    type: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    price: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    expiry_date: Sequelize.DATE
})

module.exports = Voucher;