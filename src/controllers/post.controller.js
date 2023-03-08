const postService = require('../services/post.service');
const { statusHTTP } = require('../utils/statusHTTPCodes');

const createPost = async (req, res) => {
  try {
    const response = await postService.createPost(req.body, req.user);
  if (response.status) return res.status(response.status).json({ message: response.message });
    return res.status(statusHTTP.CREATED).json(response);
  } catch (error) {
    console.error(error);
    return res.status(statusHTTP.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const response = await postService.getAllPosts();
    if (response.status) return res.status(response.status).json({ message: response.message });
    return res.status(statusHTTP.OK).json(response);
  } catch (error) {
    console.error(error);
    return res.status(statusHTTP.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
};

const getPostById = async (req, res, next) => {
  try {
    const response = await postService.getPostById(req.params);
    if (response.status) return res.status(response.status).json({ message: response.message });
    return res.status(statusHTTP.OK).json(response);
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const getPostsBySearch = async (req, res, next) => {
  try {
    const response = await postService.getPostsBySearch(req.query);
    console.log('controller>>>>>>', response);
    if (response.status) return res.status(response.status).json(response.message);
    return res.status(statusHTTP.OK).json(response);
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const updatePost = async (req, res) => {
  try {
    req.body.userId = req.user.userId;
    const response = await postService.updatePost(req.body, req.params);
    if (response.status) return res.status(response.status).json({ message: response.message });
    return res.status(statusHTTP.OK).json(response);
  } catch (error) {
    console.error(error);
    return res.status(statusHTTP.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
};

const deletePost = async (req, res, next) => {
  try {
    console.log('controller>>>>>>', req.user);
    const response = await postService.deletePost(req.user, req.params);
    if (
      response.status
    ) return res.status(response.status).json({ message: response.message });
    return res.status(statusHTTP.NO_CONTENT).send();
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  getPostsBySearch,
  updatePost,
  deletePost,
};