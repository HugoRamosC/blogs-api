const { validateToken } = require('../utils/auth');
const { statusHTTP } = require('../utils/statusHTTPCodes');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const response = validateToken(token);
    if (response.status) return res.status(response.status).json({ message: response.message });

    req.user = { 
      id: response.decoded.id,
      email: response.decoded.email,
    };
    next();
  } catch (error) {
    console.error(error);
    return res.status(statusHTTP.ANAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};