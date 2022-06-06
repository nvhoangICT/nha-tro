const express = require('express')
const bodyParser = require('body-parser')
const configViewEngine = require('./src/config/viewEngine')
const webRoutes = require('./src/routes/webRoutes')
require('dotenv').config()

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

configViewEngine(app)
webRoutes(app)

let port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})