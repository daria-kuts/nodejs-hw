import express from 'express';
import { celebrate, Segments } from 'celebrate';

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserSession,
} from '../controllers/authController.js';

import {
  requestResetEmail,
  resetPassword
} from '../controllers/authController.js';

import {
  requestResetEmailSchema,
  resetPasswordSchema
} from '../validations/authValidation.js';

import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';

const router = express.Router();

router.post('/register', celebrate(registerUserSchema), registerUser);

router.post('/login', celebrate(loginUserSchema), loginUser);

router.post('/logout', logoutUser);

router.post('/refresh', refreshUserSession);

router.post(
  '/request-reset-email',
  celebrate({
    [Segments.BODY]: requestResetEmailSchema,
  }),
  requestResetEmail
);

router.post(
  '/reset-password',
  celebrate({
    [Segments.BODY]: resetPasswordSchema,
  }),
  resetPassword
);

export default router;
