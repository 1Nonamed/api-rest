import Joi from "joi";

// Auth
export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

// Users
export const userSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

// Roles
export const roleSchema = Joi.object({
  name: Joi.string().required(),
});

export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      const value = await schema.validateAsync(req.body);
      next();
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  };
};
