
const db = require('../models/index')

let getHomePage = async (req, res) => {
    try {
        let data = await db.Owner.findAll();
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('aboutPage.ejs')
}

module.exports = { getHomePage, getAboutPage }