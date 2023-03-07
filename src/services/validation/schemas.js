const Joi = require('joi');

const requiredMissing = 'Some required fields are missing';

const displayNameSchema = Joi.string().min(8).required()
  .label('displayName')
  .messages({
    'string.min': '{#label} length must be at least {#limit} characters long',
    'string.base': requiredMissing,
  });

const emailSchema = Joi.string().email().required()
.label('email')
.messages({
  'string.email': '{#label} must be a valid email',
  'string.base': 'Some required fields are missing',
});

const passwordSchema = Joi.string().min(6).required()
.label('password')
.messages({
  'string.min': '{#label} length must be at least {#limit} characters long',
  'string.base': 'Some required fields are missing',
});

const categoryNameSchema = Joi.string().required()
.label('name')
.messages({
  'string.base': '{#label} is required',
});

const postSchema = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(
    Joi.number().required(),
  ).min(1).required(),
}).messages({
  'string.base': requiredMissing,
  'array.base': requiredMissing,
  'array.min': '"{#key}" must be greater than or equal to {#limit}',
});

module.exports = {
  displayNameSchema,
  emailSchema,
  passwordSchema,
  categoryNameSchema,
  postSchema,
};