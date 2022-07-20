require("dotenv").config();
const nodemailer = require("nodemailer");
const propertyService = require("../services/propertyService");

let sendSimpleEmail = async (email, phone, name, address, time) => {
  console.log(email);
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "oranje.hust@gmail.com", // generated ethereal user
      pass: "mexpsblydxjyamyp", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Uptown" <oranje.hust@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "[Uptown] Liên hệ xem nhà", // Subject line
    html: `<p>${name} muốn liên hệ xem nhà tại địa chỉ ${address}.<br />Ngày hẹn:${time}<br />Số điện thoại liên hệ: ${phone}</p>`, // html body
  });
};

module.exports = {sendSimpleEmail};
