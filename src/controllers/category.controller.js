const categoryService = require('../services/category.service');
const { statusHTTP } = require('../utils/statusHTTPCodes');

const createCategory = async (req, res) => {
  try {
    const response = await categoryService.createCategory(req.body);
    if (response.status) return res.status(response.status).json({ message: response.message });
    return res.status(statusHTTP.CREATED).json(response);
  } catch (error) {
    console.log(error);
    return res.status(statusHTTP.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const response = await categoryService.getAllCategories();
    if (!response) return res.status(response.status).json(response.message);
    return res.status(statusHTTP.OK).json(response);
  } catch (error) {
    console.log(error);
    return res.status(statusHTTP.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};