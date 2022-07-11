

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

let getAllPropertiesById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Property.findAll({ where: { id: id }, raw: true });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}

let getPropertyByOwner = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.OwnHouse.findAll({ where: { ownerId: id }, raw: true });
            let houseId = data.map(item => (item.id))
            resolve(getAllPropertiesById(houseId));
        } catch (e) {
            reject(e);
        }
    });
}

let getPropertiesByDistrict = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Property.findAll({ where: { districtId: id }, raw: true });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}

let getPropertiesByPrice = (price) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Property.findAll({
                where: {
                    price: {
                        [Op.lt]: price
                    }
                }, raw: true
            });
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
                area: data.area,
                bedroom: data.bedroom,
                bathroom: data.bathroom,
                yearBuilt: data.yearBuilt,
                price: data.price,
                waterPrice: data.waterPrice,
                electricPrice: data.electricPrice,
                status: false,
                description: data.description,
                districtId: data.districtId,
            });
            let allProperties = await db.Property.findAll();
            resolve(allProperties);
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
            let allProperties = await db.Property.findAll();
            resolve(allProperties);
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
    postRequestTour,
    getPropertyByOwner,
    getAllPropertiesById,
    getPropertiesByDistrict,
    getPropertiesByPrice
};