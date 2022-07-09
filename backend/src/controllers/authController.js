
const db = require('../models/index')
const loginService = require('../services/loginService')

let forgetPassword = async (req, res) => {
  let user = await db.User.findOne({ where: { email: req.body.email } });
  if (!user) {
    return res.status(400).json({ error: 'Email is not found' })
  } 
  const newToken = await loginService.generateAccessToken(user);
  const url = `http://localhost:8081/api/reset-password/${user.id}/${newToken}`
  console.log(url)
  res.send('Password reset has been sent successfully')
}

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }
  let user = await loginService.handleLogin(req, res);
  if (!user) {
    return res.status(400).json({
      message: "Email or password is incorrect"
    });
  }
};

module.exports = { forgetPassword }