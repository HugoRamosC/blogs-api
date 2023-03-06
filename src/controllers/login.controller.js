const authService = require('../services/login.service');
const { statusHTTP } = require('../utils/statusHTTPCodes');

const authenticate = async (req, res, _next) => {
    const authentication = await authService.authenticate(req.body);
    if (authentication.status) return res.status(authentication.status).json(authentication);
    return res.status(statusHTTP.OK).json(authentication);
};

module.exports = {
  authenticate,
};