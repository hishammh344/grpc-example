import express, { Response, Request } from "express";
import StatusCode from "@/src/utils/httpCode";
import client from "@/src/client";

const router = express.Router();

router.post("/login", async (req: Request, resp: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    resp.status(StatusCode.BAD_REQUEST).json({
      message: "Parameters Required",
    });
    return;
  }

  try {
    await client.login({ email, password }, (err: any, response: any) => {
      resp.status(StatusCode.OK).json(response);
    });
    return;
  } catch (err) {
    resp.status(StatusCode.INTERNAL_SERVER_ERROR).json(err);
    return;
  }
});

export const authLogin = {
  router,
  permissions: [],
  requireAuth: false,
};
