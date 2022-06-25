const db = require('../models');
const bcrypt = require('bcryptjs');
// const validatePassword = require("express-validator");
let jwt = require('jsonwebtoken');
require("dotenv").config();
const loginController = require('../controllers/loginController');

let handleLogin = async (req, res) => {
    try {
        let user = await db.User.findOne({ where: { email: req.body.email } });
        if (!user) {
            throw new Error("User not found");
        }
        let isValid = await bcrypt.compare(req.body.password, user.password);
        if (!isValid) {
            throw new Error("Password is incorrect");
        }
        if (user && isValid) {
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);
            // localStorage.setItem('refreshToken', refreshToken);
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true, 
                maxAge: 1000 * 60 * 60 * 24 * 7,
                samesite: "strict",
                secure: false
            });
            const { password, ...others } = user.dataValues;
            return res.status(200).json({ ...others, accessToken, refreshToken });
        }
    } catch (e) {
        return res.status(400).send(e.message);
    }
    return user;
}

let generateAccessToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
}

let generateRefreshToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
}

module.exports = { handleLogin };