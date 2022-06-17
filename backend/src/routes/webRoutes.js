const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const loginController = require('../controllers/loginController')
const registerController = require('../controllers/registerController')
const testController = require('../controllers/testController')
const passport = require('passport');

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

    return app.use("/", router);
}

module.exports = webRoutes;

