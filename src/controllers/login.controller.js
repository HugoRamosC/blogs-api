const loginService = require('../services/login.service');
const { statusHTTP } = require('../utils/statusHTTPCodes');

const authenticate = async (req, res) => {
    const authentication = await loginService.authenticate(req.body);
    if (authentication.status) return res.status(authentication.status).json(authentication);
    return res.status(statusHTTP.OK).json(authentication);
};

module.exports = {
  authenticate,
};