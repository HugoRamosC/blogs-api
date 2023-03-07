const { Category } = require('../models');
// const { generateToken } = require('../utils/auth');
// const { statusHTTP } = require('../utils/statusHTTPCodes');
const inputValidations = require('./validation/validations');

// const inputValidate = (name, email, password) => {
//   const errorName = inputValidations.validateName(name);
//   if (errorName) return errorName;
//   const errorEmail = inputValidations.validateEmail(email);
//   if (errorEmail) return errorEmail;
//   const errorPassword = inputValidations.validatePassword(password);
//   if (errorPassword) return errorPassword;
//   return false;
// };

// const existingUser = async (email) => {
//   const user = await User.findOne({ where: { email } });
//   if (user) return { status: statusHTTP.CONFLICT, message: 'User already registered' };
//   return false;
// };

const createCategory = async ({ name }) => {
  const inputError = inputValidations.validateCategoryName(name);
  if (inputError) return inputError;
  
  const newCategory = await Category.create({ name });
  return newCategory;
};

// const getAllUsers = async () => {
//   const users = await User.findAll({ attributes: { exclude: ['password'] } });
//   if (!users) return { status: statusHTTP.NOT_FOUND, message: 'Users not found' };
//   return users;
// };

// const getUserById = async (id) => {
//   const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
//   if (!user) return { status: statusHTTP.NOT_FOUND, message: 'User does not exist' };
//   return user;
// };

module.exports = {
  createCategory,
  // getAllUsers,
  // getUserById,
};