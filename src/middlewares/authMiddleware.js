const { validateToken } = require('../utils/auth');
const { statusHTTP } = require('../utils/statusHTTPCodes');
// const userService = require('../services/user.service');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const response = validateToken(token);
    if (response.status) return res.status(response.status).json({ message: response.message });

    req.user = { email: response.decoded.email };
    next();
  } catch (error) {
    console.log(error);
    return res.status(statusHTTP.ANAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};