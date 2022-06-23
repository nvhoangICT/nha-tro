const express = require('express')
const bodyParser = require('body-parser')
const configViewEngine = require('./src/config/viewEngine')
const webRoutes = require('./src/routes/webRoutes')
const connectDB = require('./src/config/db')
const cors = require('cors')
require('dotenv').config()

let app = express()

app.use(cors({ origin: true }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


configViewEngine(app)
webRoutes(app)

connectDB()

let port = process.env.PORT || 8081

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})