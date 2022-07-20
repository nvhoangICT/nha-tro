const userService = require("../services/userService");

const changeInfo = async (req, res) => {
  let data = req.body;
  let allUsers = await userService.updateUserData(data);
  return res.status(200).json({data: allUsers});
};

module.exports = {changeInfo};
