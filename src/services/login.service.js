const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const { statusHTTP } = require('../utils/statusHTTPCodes');

const authenticate = async ({ email, password }) => {
  if (!email || !password) {
    const error = { message: 'Some required fields are missing' };
    error.status = statusHTTP.BAD_REQUEST;
    return error;
  }

  const user = await User.findOne({
    attributes: ['id', 'email'],
    where: { email, password },
  });

  if (!user) {
    const error = { message: 'Invalid fields' };
    error.status = statusHTTP.BAD_REQUEST;
    return error;
  }
  console.log('loginService>>>>>>', user);
  const token = generateToken(user.dataValues);
  return { token };
};

module.exports = {
  authenticate,
};