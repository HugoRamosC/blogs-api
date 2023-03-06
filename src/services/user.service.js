const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const { statusHTTP } = require('../utils/statusHTTPCodes');
const inputValidations = require('./validation/validations');

const inputValidate = (name, email, password) => {
  const errorName = inputValidations.validateName(name);
  const errorEmail = inputValidations.validateEmail(email);
  const errorPassword = inputValidations.validatePassword(password);
  if (errorName) return errorName;
  if (errorEmail) return errorEmail;
  if (errorPassword) return errorPassword;
  return false;
};

const existingUser = (email) => {
  const user = User.findOne({ where: { email } });
  if (!user) return { status: statusHTTP.CONFLICT, message: 'User already registered' };
  return false;
};

const create = async ({ displayName, email, password }) => {
  const inputError = inputValidate(displayName, email, password);
  const userError = existingUser(email);
  
  if (inputError) return inputError;
  if (userError) return userError;

  const token = generateToken({ email });
  return token;
};

module.exports = {
  create,
};