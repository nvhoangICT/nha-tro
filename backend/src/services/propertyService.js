

const db = require('../models');
const emailService = require('./emailService')

let getAllProperty = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Property.findAll({ raw: true });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}

let getPropertyById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Property.findOne({ where: { id: id }, raw: true });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}

let updatePropertyData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Property = await db.Property.findOne({ where: { id: data.id } });
            await Property.update({
                id: data.id,
                name: data.name,
                address: data.address,
            });
            let allPropertys = await db.Property.findAll();
            resolve(allPropertys);
        } catch (e) {
            reject(e);
        }
    });
}

let deleteProperty = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Property = await db.Property.findOne({ where: { id: id } });
            await Property.destroy();
            let allPropertys = await db.Property.findAll();
            resolve(allPropertys);
        } catch (e) {
            reject(e);
        }
    });
}


let postRequestTour = (req, res) => {
    const { email, phone, name } = req.body
    return new Promise(async (resolve, reject) => {
        try {
            if (!email || !phone || !name) {
                resolve({
                    errMessage: 'Please enter all information',
                })
            } else {
                await emailService.sendSimpleEmail(email, phone, name);
            }
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    getAllProperty,
    getPropertyById,
    updatePropertyData,
    deleteProperty,
    postRequestTour
};