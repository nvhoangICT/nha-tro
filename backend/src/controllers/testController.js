
const db = require('../models/index')
const registerService = require('../services/registerService')

let getCRUD = async (req, res) => {
    return res.render('auth.ejs')
}

let postCRUD = async (req, res) => {
    let data = await registerService.addUser(req.body);
    console.log(data)
    return res.send('postCRUD');
}

let readAllCRUD = async (req, res) => {
    let data = await registerService.getAllUser();
    console.log(data)
    return res.render('display.ejs', { data: data })
}

let editCRUD = async (req, res) => {
    let userID = req.query.id;
    if (userID) {
        let data = await registerService.getUserById(userID);    
        if (!data) {
            return res.send('User not found');
        }
        return res.render('edit.ejs', { data: data })
    } else {
        return res.send('User not found');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await registerService.updateUserData(data);
    return res.render('display.ejs', { data: allUsers })
}

let deleteCRUD = async (req, res) => {
    let userID = req.query.id;
    let allUsers = await registerService.deleteUser(userID);
    return res.render('display.ejs', { data: allUsers })
}

module.exports = { getCRUD, postCRUD, readAllCRUD, editCRUD, putCRUD, deleteCRUD }