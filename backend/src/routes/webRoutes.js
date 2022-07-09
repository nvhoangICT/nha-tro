const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const loginController = require('../controllers/loginController')
const registerController = require('../controllers/registerController')
const testController = require('../controllers/testController')
const logoutController = require('../controllers/logoutController')
const passport = require('passport');
const authController = require('../controllers/authController')
const propertyController = require('../controllers/propertyController')
const dashboardController = require('../controllers/dashboardController')

const propertyService = require('../services/propertyService');

let webRoutes = (app) => {
    // API USER 
    router.get("/get-crud", testController.getCRUD);
    router.post("/post-crud", testController.postCRUD);
    router.get("/read-crud", testController.readAllCRUD);
    router.get("/edit-crud", testController.editCRUD);
    router.post("/put-crud", testController.putCRUD);
    router.get("/delete-crud", testController.deleteCRUD);

    // API AUTHENTICATION
    router.post("/api/register", registerController.createUser);
    router.post("/api/login", loginController.handleLogin);
    // router.post("/api/refresh", loginController.refreshToken);
    router.post("/logout", logoutController.logout);

    // API CRUD ROOM
    router.post("/api/add-property", propertyController.postProperty);
    router.get("/api/read-property", propertyController.readAllProperty);
    router.get("/api/edit-property", propertyController.editProperty);
    router.post("/api/put-property", propertyController.putProperty);
    router.get("/api/delete-property", propertyController.deleteProperty);
    router.get("/api/get-property/{:id}", propertyController.readProperty);

    router.get("/dashboard", dashboardController.getDashboard);

    return app.use("/", router);
}

module.exports = webRoutes;

