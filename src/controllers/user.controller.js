const userService = require('../services/user.service');
const { statusHTTP } = require('../utils/statusHTTPCodes');

const create = async (req, res) => {
  try {
    const token = await userService.create(req.body);
    if (token.status) return res.status(token.status).json({ message: token.message });
    return res.status(statusHTTP.CREATED).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(statusHTTP.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
};

const getByEmail = async (req, res) => {
  try {
    const user = await userService.getByEmail(req.user.dataValues.email);
    if (!user) return res.status(user.status).json(user.message);
    return res.status(statusHTTP.OK).json(user);
  } catch (error) {
    console.log(error);
    return res.status(statusHTTP.INTERNAL_SERVER_ERROR)
    .json({ message: 'Internal server error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (!users) return res.status(users.status).json(users.message);
    return res.status(statusHTTP.OK).json(users);
  } catch (error) {
    console.log(error);
    return res.status(statusHTTP.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
};

module.exports = {
  create,
  getByEmail,
  getAllUsers,
};