import { UnaryCallback } from "@grpc/grpc-js/build/src/client";
import { initAccessToken } from "@/src/services/auth";
import StatusCode from "@/src/utils/httpCode";

interface Request {
  request: {
    email: string;
    password: string;
  };
}

interface Response {
  email: string;
  token: string;
  message: string;
  status: StatusCode;
}

export const loginUser = (call: Request, callback: UnaryCallback<Response>) => {
  const { email, password } = call.request;
  const token = initAccessToken({ email, password });
  callback(null, {
    email,
    token,
    message: "successfully logged in",
    status: StatusCode.OK,
  });
};
