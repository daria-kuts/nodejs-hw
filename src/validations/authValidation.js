import { Joi } from 'celebrate';

export const registerUserSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
};

export const loginUserSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

export const requestResetEmailSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
  }),
};

export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(6).required(),
  token: Joi.string().required(),
});
