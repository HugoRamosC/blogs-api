const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const statusHTTP = require('../utils/statusHTTPCodes');

const authenticate = async ({ email, password }) => {
  if (!email || !password) {
    const error = {
      message: 'Some required fields are missing',
    };
    error.status = statusHTTP.BAD_REQUEST;
    throw error;
  }

  const user = await User.findOne({
    attributes: ['id', 'name', 'email'],
    where: { email, password },
  });

  if (!user) {
    const error = new Error('Invalid user or password');
    error.status = statusHTTP.ANAUTHORIZED;
    throw error;
  }
  console.log('auth.service 24 >>>>>>>>>>', user);
  const token = generateToken(user.dataValues)

  return { token };
};