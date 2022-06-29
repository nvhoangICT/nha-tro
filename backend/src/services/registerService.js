

const db = require('../models');

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
            let User = await db.User.findOne({ where: { id: data.id } });
            await User.update({
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
            let User = await db.User.findOne({ where: { id: id } });
            await User.destroy();
            let allUsers = await db.User.findAll();
            resolve(allUsers);
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = { getAllUser, getUserById, updateUserData, deleteUser };