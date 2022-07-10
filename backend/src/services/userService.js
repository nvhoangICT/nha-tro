const db = require('../models');

let findByEmail = async (email) => {
    let user = await db.User.findOne({ where: { email: email } })
    if (!user) {
        throw new Error("User not found");
    }
    return user.email
  }

  let resetPassword = async (email, password) => {
    await db.User.update( {password: password}, { where: {
        email:email
    }}
    );
  };

  module.exports = {
    resetPassword,
    findByEmail
  };