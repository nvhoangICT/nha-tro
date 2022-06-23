const registerService = require("./../services/registerService");
const { validationResult } = require("express-validator");
const db = require("../models/index");
const { response } = require("express");

let getPageRegister = (req, res) => {
    return res.render("register.ejs", {
        errors: req.flash("errors")
    });
};

// let createNewUser = async (req, res) => {
//     //validate required fields
//     let errorsArr = [];
//     let validationErrors = validationResult(req);
//     if (!validationErrors.isEmpty()) {
//         let errors = Object.values(validationErrors.mapped());
//         errors.forEach((item) => {
//             errorsArr.push(item.msg);
//         });
//         req.flash("errors", errorsArr);
//         return res.redirect("/auth");
//     }

//     //create a new user
//     let newUser = {
//         fullname: req.body.fullName,
//         email: req.body.email,
//         password: req.body.password
//     };
//     try {
//         await registerService.createNewUser(newUser);
//         return res.redirect("/auth");
//     } catch (err) {
//         req.flash("errors", err);
//         return res.redirect("/register");
//     }
// };

// let createNewUser = async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt(10)
//         const hashed = await bcrypt.hashSync(req.body.password, salt);

//         const newUser = await db.User.create({
//             id: userID,
//             name: data.name,
//             email: data.email,
//             password: encryptedPassword,
//         });

//         res.status(200).json(newUser);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }

let createUser = async (req, res) => {
    try {
        let data = await registerService.addUser(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getPageRegister,
    createUser
};