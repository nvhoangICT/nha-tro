
require('dotenv').config();
const nodemailer = require("nodemailer");

let sendSimpleEmail = async (email, phone, name) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "hoangnvdk1@gmail.com", // generated ethereal user
            pass: "wacqkherddewfxme", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Uptown" <hoangnvdk1@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Liên hệ xem nhà", // Subject line
        html: `<p>${name} muốn liên hệ xem nhà. Số điện thoại liên hệ ${phone}</p>`, // html body
    });
}

module.exports = { sendSimpleEmail }