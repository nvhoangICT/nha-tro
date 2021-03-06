const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const testController = require("../controllers/testController");
// const passport = require('passport');
const authController = require("../controllers/authController");
const propertyController = require("../controllers/propertyController");
const userController = require("../controllers/userController");
const propertyService = require("../services/propertyService");
// const emailService = require('../services/emailService');
// const nodemailer = require("nodemailer");
require("dotenv").config();

let webRoutes = (app) => {
  // API TEST
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
  // router.post("api/logout", logoutController.logout);

  // API FORGET PASSWORD
  // router.get("/password/reset", authController.showForgotForm);
  // router.post("/password/email", authController.sendResetLinkEmail);

  // API RESET PASSWORD
  // router.get("/password/reset/:email", authController.showResetForm);
  // router.post("/password/reset", authController.reset);

  // router.put("/forget-password", authController.forgetPassword);

  // API USER
  router.put("/api/change-info", userController.changeInfo);

  // API CRUD ROOM
  router.post("/api/add-property", propertyController.postProperty);
  router.post("/api/read-property", propertyController.readAllProperty);
  router.put("/api/put-property", propertyController.putProperty);
  router.delete("/api/delete-property/:id", propertyController.deleteProperty);
  router.get("/api/get-property/:ID", propertyController.readProperty);
  router.get(
    "/api/manage-property/:ID",
    propertyController.readPropertyByOwner
  );

  // API EMAIL_SERVICE
  router.post("/api/send-email", propertyService.postRequestTour);

  // API SEARCH
  router.get("/api/explore/:id", propertyService.getPropertiesByDistrict);
  router.get("/api/get-owner/:id", propertyController.getOwnerByProperty);

  // router.get("/dashboard", dashboardController.getDashboard);

  // router.post("/logout", logoutController.logout);

  return app.use("/", router);
};

module.exports = webRoutes;
