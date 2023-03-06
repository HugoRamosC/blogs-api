const jwt = require('jsonwebtoken');
const statusHTTP = require('./statusHTTPCodes');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const generateToken = ({ email }) => {
  const token = jwt.sign({ email }, secret, jwtConfig);
  return token;
};

const validateToken = async (token) => {
  if (!token) {
    const error = { message: 'Token not found' };
    error.status = statusHTTP.ANAUTHORIZED;
    return error;
  }
  
  try {
    const decryptedData = await jwt.verify(token, secret);
    return { token: decryptedData };
  } catch (e) {
    const error = {
      message: 'Invalid fields',
    };
    error.status = statusHTTP.BAD_REQUEST;
    return error;
  }
};

module.exports = {
  generateToken,
  validateToken,
};