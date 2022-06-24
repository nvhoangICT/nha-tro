const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const loginController = require('../controllers/loginController')
const registerController = require('../controllers/registerController')
const testController = require('../controllers/testController')
const logoutController = require('../controllers/logoutController')
const passport = require('passport');
const authController = require('../controllers/authController')

let webRoutes = (app) => {
    // router.get("/", loginController.checkLoggedIn);
    // router.get("/login",loginController.checkLoggedOut, loginController.getPageLogin);
    // router.post("/login", passport.authenticate("local", {
    //     successRedirect: "/",
    //     failureRedirect: "/login",
    //     successFlash: true,
    //     failureFlash: true
    // }));

    // router.get("/register", registerController.getPageRegister);
    // router.post("/register", auth.validateRegister, registerController.createNewUser);
    // router.post("/logout", loginController.postLogOut);

    router.get("/get-crud", testController.getCRUD);
    router.post("/post-crud", testController.postCRUD);
    router.get("/read-crud", testController.readAllCRUD);
    router.get("/edit-crud", testController.editCRUD);
    router.post("/put-crud", testController.putCRUD);
    router.get("/delete-crud", testController.deleteCRUD);

    // API
    // router.post("/api/register", registerController.createUser);
    // router.post("/api/login", loginController.handleLogin);
    // router.post("/api/refresh", loginController.refreshToken);
    
    router.post("/api/register", authController.registerUser);
    router.post("/api/login", authController.loginUser);

    router.get("/login", loginController.getPageLogin);
    router.post("/logout", logoutController.logout);
    return app.use("/", router);
}

module.exports = webRoutes;

