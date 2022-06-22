const express = require('express')

let configViewEngine = (app) => {
    app.use(express.static("./src/public")) // static files
    app.set("view engine", "ejs")
    app.set("views", "./src/views")
}

module.exports = configViewEngine;
