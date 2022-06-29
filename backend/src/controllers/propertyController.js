
const { v4: uuidv4 } = require('uuid');
const db = require('../models/index')

let getProperty = async (req, res) => {
    // return res.render('auth.ejs')
}

let postProperty = async (req, res) => {
    try {
        let PropertyID = uuidv4();
        await db.Property.create({
            id: PropertyID,
            name: req.body.name,
            address: req.body.address,
            area: req.body.area,
            bedroom: req.body.bedroom,
            bathroom: req.body.bathroom,
            yearBuilt: req.body.yearBuilt,
            price: req.body.price,
            waterPrice: req.body.waterPrice,
            electricPrice: req.body.electricPrice,
            status: req.body.status,
            description: req.body.description,
            districtId: req.body.districtId,
            wardId: req.body.wardId
        });
        res.status(200).json("Property added successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
}

let readAllProperty = async (req, res) => {
    let data = await propertyService.getAllProperty();
    console.log(data)
    return res.render('display.ejs', { data: data })
}

let editProperty = async (req, res) => {
    let PropertyID = req.query.id;
    if (PropertyID) {
        let data = await propertyService.getPropertyById(PropertyID);
        if (!data) {
            return res.send('Property not found');
        }
        return res.render('edit.ejs', { data: data })
    } else {
        return res.send('Property not found');
    }
}

let putProperty = async (req, res) => {
    let data = req.body;
    let allProperties = await propertyService.updatePropertyData(data);
    return res.render('display.ejs', { data: allProperties })
}

let deleteProperty = async (req, res) => {
    let PropertyID = req.query.id;
    let allPropertys = await propertyService.deleteProperty(PropertyID);
    return res.render('display.ejs', { data: allPropertys })
}

module.exports = { getProperty, postProperty, readAllProperty, editProperty, putProperty, deleteProperty }