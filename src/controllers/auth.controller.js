const authService = require('../services/auth.service');
const { statusHTTP } = require('../utils/statusHTTPCodes');

const authenticate = async (req, res, next) => {
  // try {
    const authentication = await authService.authenticate(req.body);
    if (!authentication.status) return res.status(statusHTTP.OK).json(authentication);
    return res.status(authentication.status).json(authentication);
  // } catch (error) {
    // return next(error);
  // }
};

module.exports = {
  authenticate,
};