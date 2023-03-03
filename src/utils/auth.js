const jwt = require('jsonwebtoken');
const statusHTTP = require('./statusHTTPCodes');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const generateToken = ({ id, email, password }) => {
  if (!email || !password) {
    const error = {
      message: 'Some required fields are missing',
    };
    error.status = statusHTTP.BAD_REQUEST;
    throw error;
  }
  jwt.sign({ id, email }, secret, jwtConfig);
};

const verifyToken = async (token) => {
  if (!token) {
    const error = new Error('missing token');
    error.status = statusHTTP.ANAUTHORIZED;
    throw error;
  }

  try {
    const decryptedData = await jwt.verify(token, secret);
    return { token: decryptedData };
  } catch (e) {
    const error = {
      message: 'Invalid fields',
    };
    error.status = statusHTTP.BAD_REQUEST;
    throw error;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};