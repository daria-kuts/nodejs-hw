import express from 'express';
import { celebrate } from 'celebrate';

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserSession,
} from '../controllers/authController.js';

import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';

const router = express.Router();

router.post('/register', celebrate(registerUserSchema), registerUser);

router.post('/login', celebrate(loginUserSchema), loginUser);

router.post('/logout', logoutUser);

router.post('/refresh', refreshUserSession);

export default router;
