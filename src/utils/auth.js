const jwt = require('jsonwebtoken');
const { statusHTTP } = require('./statusHTTPCodes');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const generateToken = ({ id, email }) => {
  const token = jwt.sign({ id, email }, secret, jwtConfig);
  return token;
};

const validateToken = (token) => {
  if (!token) {
    const error = { message: 'Token not found' };
    error.status = statusHTTP.ANAUTHORIZED;
    return error;
  }

  const decryptedData = jwt.verify(token, secret);
  return { decoded: decryptedData };
};

module.exports = {
  generateToken,
  validateToken,
};