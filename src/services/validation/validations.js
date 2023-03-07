const {
  displayNameSchema,
  emailSchema,
  passwordSchema,
  categoryNameSchema,
} = require('./schemas');
const { statusHTTP } = require('../../utils/statusHTTPCodes');

const validateName = (name) => {
  const { error } = displayNameSchema.validate(name);
  if (error) return { status: statusHTTP.BAD_REQUEST, message: error.message };
  return false;
};

const validateEmail = (email) => {
  const { error } = emailSchema.validate(email);
  if (error) return { status: statusHTTP.BAD_REQUEST, message: error.message };
  return false;
};

const validatePassword = (password) => {
  const { error } = passwordSchema.validate(password);
  if (error) return { status: statusHTTP.BAD_REQUEST, message: error.message };
  return false;
};

const validateCategoryName = (name) => {
  const { error } = categoryNameSchema.validate(name);
  if (error) return { status: statusHTTP.BAD_REQUEST, message: error.message };
  return false;
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  validateCategoryName,
};