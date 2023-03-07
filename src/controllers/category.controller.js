const categoryService = require('../services/category.service');
const { statusHTTP } = require('../utils/statusHTTPCodes');

const createCategory = async (req, res) => {
  try {
    const response = await categoryService.createCategory(req.body);
    console.log('>>>>>>>', response);
    if (response.status) return res.status(response.status).json({ message: response.message });
    return res.status(statusHTTP.CREATED).json(response);
  } catch (error) {
    console.log(error);
    return res.status(statusHTTP.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
};

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await userService.getAllUsers();
//     if (!users) return res.status(users.status).json(users.message);
//     return res.status(statusHTTP.OK).json(users);
//   } catch (error) {
//     console.log(error);
//     return res.status(statusHTTP.INTERNAL_SERVER_ERROR)
//       .json({ message: 'Internal server error' });
//   }
// };

// const getUserById = async (req, res) => {
//   try {
//     const response = await userService.getUserById(req.params.id);
//     if (response.status) return res.status(response.status).json({ message: response.message });
//     return res.status(statusHTTP.OK).json(response);
//   } catch (error) {
//     console.log(error);
//     return res.status(statusHTTP.INTERNAL_SERVER_ERROR)
//       .json({ message: 'Internal server error' });
//   }
// };

module.exports = {
  createCategory,
  // getAllUsers,
  // getUserById,
};