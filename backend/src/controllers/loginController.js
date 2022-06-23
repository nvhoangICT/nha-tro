// const { validationResult } = require("express-validator");
const loginService = require("../services/loginService");

let getPageLogin = (req, res) => {
    return res.render("homePage.ejs", {
        title: "Login",
        message: req.statusMessage,
    });
};

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }
    let user = await loginService.handleLogin(req, res);
    if (!user) {
        return res.status(400).json({
            message: "Email or password is incorrect"
        });
    }
};

let requestRefreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    
}

let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

let postLogOut = (req, res) => {
    req.session.destroy(function (err) {
        return res.redirect("/login");
    });
};

module.exports = {
    getPageLogin,
    handleLogin,
    checkLoggedIn,
    checkLoggedOut,
    postLogOut
};