
const db = require("../models/index");
const { response } = require("express");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

let createUser = async (req, res) => {
    try {
        // console.log(req.body.password)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        let userID = uuidv4();
        await db.User.create({
            id: userID,
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            role: false,
        });
        res.status(200).json("User created successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
}


module.exports = {
    createUser
};