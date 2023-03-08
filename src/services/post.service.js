const { BlogPost, PostCategory, User, Category, sequelize } = require('../models');
const { statusHTTP } = require('../utils/statusHTTPCodes');
const { getAllCategories } = require('./category.service');
const inputValidations = require('./validation/validations');

const bodyInputsErrors = async ({ title, content, categoryIds }) => {
  const inputError = inputValidations.validatePostInputs({ title, content, categoryIds });
  if (inputError) {
    return {
      status: statusHTTP.BAD_REQUEST,
      message: 'Some required fields are missing',
    };
  }

  const dbCategories = await getAllCategories();
  const dbCategoriesIds = dbCategories.map((cat) => cat.dataValues.id);
  const invalidCategory = categoryIds.some((categ) => !dbCategoriesIds.includes(categ));
  if (invalidCategory) {
    return {
      status: statusHTTP.BAD_REQUEST,
      message: 'one or more "categoryIds" not found',
    };
  }

  return null;
};

const createPost = async ({ title, content, categoryIds }, { id }) => {
  const error = await bodyInputsErrors({ title, content, categoryIds });
  if (error) return error;

  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create(
      { userId: id, title, content },
      { transaction: t },
    );

    const newPostId = newPost.id;

    await Promise.all(categoryIds.map((categId) => (
      PostCategory.create(
        { postId: newPostId, categoryId: categId },
        { transaction: t },
      )
    )));

    return newPost;
  });

  return result;
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: { exclude: ['PostCategory'] } },
    ],
  });
  if (!posts) return { status: statusHTTP.NOT_FOUND, message: 'Posts not found' };
  return posts;
};

const getPostById = async ({ id }) => {
  const post = await BlogPost.findOne({ where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: { exclude: ['PostCategory'] } },
    ],
  });
  if (!post) return { status: statusHTTP.NOT_FOUND, message: 'Post does not exist' };
  return post;
};

const updatePost = async ({ title, content, userId }, { id }) => {
  const post = await getPostById({ id });
  if (
    +post.userId !== +userId
  ) return { status: statusHTTP.ANAUTHORIZED, message: 'Unauthorized user' };
  const categoryIds = post.categories.map((cat) => cat.id);
  const inputError = await bodyInputsErrors({ title, content, categoryIds });
  if (inputError) return inputError;

  post.title = title;
  post.content = content;
  await post.save();

  return post;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
};