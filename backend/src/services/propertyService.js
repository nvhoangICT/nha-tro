

const db = require('../models');

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

module.exports = {
    getAllProperty,
    getPropertyById,
    updatePropertyData,
    deleteProperty
};