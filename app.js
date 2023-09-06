const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./database')

//ROUTES
const userRoutes = require('./routes/User')
const voucherRoutes = require('./routes/Voucher')

const app = express();

//MIDDLEWARES
app.use(bodyParser.json())
app.use('/api/v1', userRoutes)
app.use('/api/v1', voucherRoutes)

const PORT = process.env.PORT || 3000;

sequelize
.sync()
.then(() => {
    app.listen(PORT,() => {
        console.log(`Connected to Database running on PORT ${PORT}`);
    })
})
.catch(err => {
    console.log(err);
})