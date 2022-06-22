
const bcrypt = require('bcrypt');
const db = require('../models');
const uuid = require('random-uuid-v4');

const salt = bcrypt.genSaltSync(10);

let addUser = async (data) => {
    let encryptedPassword = await hashPassword(data.password);

    let userID = uuid();
    await db.User.create({
        id: userID,
        name: data.name,
        email: data.email,
        password: encryptedPassword,
    });
}

let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (e) {
            reject(e);
        }
    });
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.User.findAll({ raw: true });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}

let getUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.User.findOne({ where: { id: id }, raw: true });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: data.id } });
            await user.update({
                id: data.id,
                name: data.name,
                address: data.address,
            });
            let allUsers = await db.User.findAll();
            resolve(allUsers);
        } catch (e) {
            reject(e);
        }
    });
}

let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: id } });
            await user.destroy();
            let allUsers = await db.User.findAll();
            resolve(allUsers);
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = { addUser, getAllUser, getUserById, updateUserData, deleteUser };