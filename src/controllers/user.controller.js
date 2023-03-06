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

module.exports = {
  create,
};