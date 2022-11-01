import express, { Response, Request } from "express";
import client from "@/src/client";
import StatusCode from "@/src/utils/httpCode";

const router = express.Router();

router.post("/verify", async (req: Request, resp: Response) => {
  const { token } = req.body;
  try {
    await client.verify({ token }, (err: any, res: any) => {
      if (err) {
        resp.status(StatusCode.INTERNAL_SERVER_ERROR).json({
          message: err.message,
        });
        return;
      }
      resp.status(StatusCode.OK).json(res);
      return;
    });
  } catch (err: any) {
    resp.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      message: err.message,
    });
    return;
  }
});

export const authVerify = {
  router,
  permissions: [],
  requireAuth: false,
};
