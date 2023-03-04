const authService = require('../services/auth.service');
const statusHTTP = require('../utils/statusHTTPCodes');

const authenticate = async (req, res) => {
  const authentication = await authService
    .authenticate(req.body);

  return res.status(statusHTTP.OK).json(authentication);
};

module.exports = {
  authenticate,
};