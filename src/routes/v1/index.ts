import express from "express";
import hello from "./hello";

const v1 = express.Router();

const routes = [hello];

v1.use(
  "/v1",
  routes.map((route) => route)
);

export default v1;
