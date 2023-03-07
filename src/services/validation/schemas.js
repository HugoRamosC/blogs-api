const Joi = require('joi');

const displayNameSchema = Joi.string().min(8).required()
  .label('displayName')
  .messages({
    'string.min': '{#label} length must be at least {#limit} characters long',
    'string.base': 'Some required fields are missing',
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

module.exports = {
  displayNameSchema,
  emailSchema,
  passwordSchema,
  categoryNameSchema,
};