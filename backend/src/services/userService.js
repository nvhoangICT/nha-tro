const db = require("../models");

let findByEmail = async (email) => {
  let user = await db.User.findOne({where: {email: email}});
  if (!user) {
    throw new Error("User not found");
  }
  return user.email;
};

let resetPassword = async (email, password) => {
  await db.User.update(
    {password: password},
    {
      where: {
        email: email,
      },
    }
  );
};

let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.UserDetail.create({
        id: data.id,
        dob: data.dob,
        address: data.address,
        phone: data.phone,
        gender: data.gender,
        citizenId: data.citizenId,
      });
      let allUsers = await db.UserDetail.findAll();
      resolve(allUsers);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  resetPassword,
  findByEmail,
  updateUserData,
};
