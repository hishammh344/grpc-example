import { UnaryCallback } from "@grpc/grpc-js/build/src/client";
import { verifyToken } from "@/src/services/verify";
import StatusCode from "@/src/utils/httpCode";

interface Request {
  request: {
    token: string;
  };
}

interface Response {
  email: string;
  message: string;
  status: StatusCode;
}

export const verifyUser = (
  call: Request,
  callback: UnaryCallback<Response>
) => {
  const { token } = call.request;
  try {
    const user: any = verifyToken({ token });
    callback(null, {
      email: user.email,
      message: "User is verified",
      status: StatusCode.OK,
    });
  } catch (err: any) {
    callback(err);
  }
};
