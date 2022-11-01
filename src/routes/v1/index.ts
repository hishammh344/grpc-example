import express from "express";
import { authLogin } from "@/src/routes/v1/auth/authLogin";
import { authVerify } from "@/src/routes/v1/auth/authVerify";

const v1 = express.Router();

const routes = [authLogin, authVerify];

v1.use(routes.map((route) => route.router));

export default v1;
