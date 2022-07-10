
const db = require('../models/index')
const loginService = require('../services/loginService')
const User = require('../models/user');
const bcrypt = require('bcrypt');
const mailer = require('../utils/mailer');
const userService = require('../services/userService')

// let showForgotForm = (req, res) => {
//   res.render('mail');
// }

// let sendResetLinkEmail = async (req, res) => {
//   if (!req.body.email) {
//     res.redirect('/password/reset')
//   } else {
//     let user = await userService.findByEmail(req.body.email)
//     if (!user) {
//       res.redirect('/password/reset')
//     } else {
//       bcrypt.hash(user.email, 10).then((hashedEmail) => {
//         mailer.sendMail(user.email, "Reset password", `<a href="${process.env.APP_URL}/password/reset/${user.email}?token=${hashedEmail}"> Reset Password </a>`)
//         console.log(`${process.env.APP_URL}/password/reset/${user.email}?token=${hashedEmail}`);
//       })
//       res.redirect('/password/reset?status=success')
//     }
//   }
// }


// let showResetForm = (req, res) => {
//   if (!req.params.email || !req.query.token) {
//     res.redirect('/password/reset')
//   } else {
//     res.render('reset', { email: req.params.email, token: req.query.token })
//   }
// }

// let reset = (req, res) => {
//   const { email, token, password } = req.body;
//   console.log(email, token, password);
//   if (!email || !token || !password) {
//     res.redirect('/password/reset');
//   } else {
//     bcrypt.compare(email, token, (err, result) => {
//       console.log('compare', result);
//       if (result == true) {
//         let hashedPassword = bcrypt.hash(password, 10)
//         try {
//           userService.resetPassword(email, hashedPassword)
//           res.redirect('/login');
//         } catch (error) {
//           res.redirect("/500");
//         }
//       } else {
//         res.redirect('/password/reset');
//       }
//     })
//   }
// }

let forgetPassword = async (req, res) => {
  const { email } = req.body
  let user = await db.User.findOne({ where: { email: email } });
  if (!user) {
    return res.status(400).json({ error: 'Email is not found' })
  }
  const newToken = await loginService.generateAccessToken(user);
  const url = `http://localhost:8081/api/reset-password/${user.id}/${newToken}`
  console.log(url)
  const data = {
    from: 'noreply@gmail.com',
    to: email,
    subject: 'Account Activation Link',
    html: `<p>http://localhost:3000/reset-password/${newToken}</p>`
  };
  return db.User.update({ password: password }, {
    where: {
      email: email
    }
  })
}


module.exports = { forgetPassword }