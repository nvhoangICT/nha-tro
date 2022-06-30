// const { validationResult } = require("express-validator");
const { JsonWebTokenError } = require("jsonwebtoken");
const loginService = require("../services/loginService");
require("dotenv").config();

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
    if (!refreshToken) {
        return res.status(401).json("You must be logged in to refresh your account");
    }
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log(err);
        }
        const newAccessToken = loginService.getAccessToken(user);
        const newRefreshToken = loginService.getRefreshToken(user);
        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: false, 
            maxAge: 1000 * 60 * 60 * 24 * 7,
            samesite: "strict",
            secure: false
        });
        res.status(200).json({accessToken: newAccessToken})
    })
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
    postLogOut,
};