import express from "express";
import { login, logout, register, updateUser } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/logout').get(logout);

router.route('/profile/update').post( isAuthenticated, updateUser);

export default router;
