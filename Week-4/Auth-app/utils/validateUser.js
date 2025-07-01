const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  bio: Joi.string().optional(),
});

module.exports = (data) => userSchema.validate(data);
