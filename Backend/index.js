const config = require('./config')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const mongoUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.dbname}`
const cookieParser = require("cookie-parser");

mongoose
    .connect(mongoUrl, {})
    .then(() => {
        console.log('MongoDB is connected')
    })
    .catch((err) => {
        throw err
    })


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

const userRoutes = require('./app/routes/UserRoutes')
app.use("/user", userRoutes);

const customerRoutes = require('./app/routes/CustomerRoutes')
app.use("/customer", customerRoutes);

const customerActionsRoutes = require('./app/routes/CustomerActionsRoutes')
app.use("/actions", customerActionsRoutes);


app.listen(config.app.port, () => {
    console.log('serwer Node.js działa');
});