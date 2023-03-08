const { Category } = require('../models');
const { statusHTTP } = require('../utils/statusHTTPCodes');
const inputValidations = require('./validation/validations');

const createCategory = async ({ name }) => {
  const inputError = inputValidations.validateCategoryName(name);
  if (inputError) return inputError;
  
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  if (!categories) return { status: statusHTTP.NOT_FOUND, message: 'Categories not found' };
  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
  // getUserById,
};