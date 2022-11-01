import express from "express";
import client from "./client";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

export default app;
