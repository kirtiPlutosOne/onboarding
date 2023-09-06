const Sequelize = require('sequelize');
const sequelize = require('../database')

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    email: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    password: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    isAdmin: Sequelize.BOOLEAN
})

module.exports = User;