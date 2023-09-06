const Sequelize = require('sequelize');

const sequelize = new Sequelize('Voucher_management_system', 'root', 'redfm8826@me', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;