

const db = require('../models');
const emailService = require('./emailService')
const sequelize = require('sequelize');
const { Op } = require("sequelize");

let getAllProperty = (area, price, districtId) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(area, price, districtId);
            if (!area && !price && !districtId) {
                let results = await db.Property.findAll({ raw: true });
                resolve(results);
            }

            console.log("done 1")
            // const results = await db.query(
            //     "SELECT * FROM Properties WHERE area < :area AND price < :price AND districtId = :districtId",
            //     {
            //         replacements: { area: area, price: price, districtId: districtId},
            //         type: QueryTypes.SELECT
            //     }
            // );

            if (!districtId) {
                let queryPrice = !price ? 100000000 : price;
                let queryArea = !area ? 100 : area;
                let results = await db.Property.findAll({
                    where: {
                        [Op.and]: {
                            price: {
                                [Op.lt]: queryPrice
                            },
                            area: {
                                [Op.lt]: queryArea
                            }
                        }
                    }, raw: true
                });
                resolve(results);
            } else {
                let queryPrice = !price ? 100000000 : price;
                let queryArea = !area ? 100 : area;
                let results = await db.Property.findAll({
                    where: {
                        [Op.and]: {
                            price: {
                                [Op.lt]: queryPrice
                            },
                            area: {
                                [Op.lt]: queryArea
                            },
                            districtId: districtId
                        }
                    }, raw: true
                });
                resolve(results);
            }

            console.log("done 2")

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

let getOwnerByPropertyId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let temp = await db.OwnHouse.findOne({ where: { id: id }, raw: true });
            console.log(temp);
            let data = await db.UserDetail.findOne({ where: { id: temp.ownerId }, raw: true });
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
            console.log(data.id)
            console.log(data.name)
            // const property = await db.Property.findOne({ where: { id: data.id }, raw: true });
            // console.log(property.name)
            await db.Property.update({
                name: data.name,
                address: data.address,
                area: data.area,
                bedroom: data.bedroom,
                bathroom: data.bathroom,
                yearBuilt: data.yearBuilt,
                price: data.price,
                waterPrice: data.waterPrice,
                electricPrice: data.electricPrice,
                status: data.status,
                description: data.description,
                districtId: data.districtId,
            }, { where: { id: data.id }, raw: true });
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
            // console.log(id)
            await db.Property.destroy({ where: { id: id } });
            await db.OwnHouse.destroy({ where: { id: id } });
            let allProperties = await db.Property.findAll();
            resolve(allProperties);
        } catch (e) {
            reject(e);
        }
    });
}


let postRequestTour = (req, res) => {
    const { email, phone, name, address, time } = req.body
    return new Promise(async (resolve, reject) => {
        try {
            if (!email || !phone || !name || !address || !time) {
                resolve({
                    errMessage: 'Please enter all information',
                })
            } else {
                await emailService.sendSimpleEmail(email, phone, name, address, time);
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
    getPropertiesByPrice,
    getOwnerByPropertyId
};