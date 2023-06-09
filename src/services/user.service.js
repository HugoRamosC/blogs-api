const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const { statusHTTP } = require('../utils/statusHTTPCodes');
const inputValidations = require('./validation/validations');

const inputValidate = (name, email, password) => {
  const errorName = inputValidations.validateName(name);
  if (errorName) return errorName;
  const errorEmail = inputValidations.validateEmail(email);
  if (errorEmail) return errorEmail;
  const errorPassword = inputValidations.validatePassword(password);
  if (errorPassword) return errorPassword;
  return false;
};

const existingUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user) return { status: statusHTTP.CONFLICT, message: 'User already registered' };
  return false;
};

const create = async ({ displayName, email, password, image }) => {
  const inputError = inputValidate(displayName, email, password);
  if (inputError) return inputError;

  const userError = await existingUser(email);
  if (userError) return userError;

  User.create({ displayName, email, password, image });

  const token = generateToken({ email });
  return token;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  if (!users) return { status: statusHTTP.NOT_FOUND, message: 'Users not found' };
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { status: statusHTTP.NOT_FOUND, message: 'User does not exist' };
  return user;
};

const deleteMyUser = async ({ userId }) => {
  const user = await getUserById(userId);
  if (user.status) return user;
  
  await user.destroy({ where: { id: userId } });

  return true;
};

module.exports = {
  create,
  getAllUsers,
  getUserById,
  deleteMyUser,
};