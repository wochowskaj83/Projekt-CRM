const config = require('./config')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const mongoUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.dbname}`

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

const userRoutes = require('./app/routes/UserRoutes')
app.use("/user", userRoutes);


app.get('/', (req, res) => {
        res.render("home")
});


app.listen(config.app.port, () => {
    console.log('serwer Node.js działa');
});