const { BlogPost, PostCategory, sequelize } = require('../models');
const inputValidations = require('./validation/validations');

const createPost = async ({ title, content, categoryIds }) => {
  const inputError = inputValidations.validatePostInputs({ title, content, categoryIds });
  if (inputError) return inputError;

  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create(
      { title, content, categoryIds },
      { transaction: t },
    );

    const newPostId = newPost.id;

    await Promise.all(categoryIds.map((categId) => (
      PostCategory.create(
        { newPostId, categId },
        { transaction: t },
      )
    )));

    console.log('postService>>>>>', newPost);
    return newPost;
  });

  return result;
};

module.exports = {
  createPost,
};