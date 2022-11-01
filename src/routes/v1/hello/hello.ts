import express from "express";
import client from "../../../client";
import { closeClient, getClientChannel } from "@grpc/grpc-js";

const router = express.Router();

router.get("/", (req, resp) => {
  //server streaming

  let array: Array<any> = [];
  const call = client.sayHello({ name: "test" });

  call.on("data", (response: any) => {
    array.push(`<p style="font-weight: 900;     font-weight: 900;
    font-family: monospace;">${response.message}</p>`);
  });
  call.on("end", function () {
    resp.send(
      `<body style=" background-color: #000"><div style="color: #fff; flex:1; display:flex;flex-wrap: wrap;">${array}</div></body>`
    );
  });
});

router.get("/chat", (req, resp) => {
  //bi-directional streaming

  const call = client.chat();

  call.write({ message: "☑️ establishing connection..." });
  let i = 0;
  call.on("data", (response: any) => {
    if (i > 25) {
      setTimeout(() => call.write({ message: "terminate" }), 1000);
    }
    setTimeout(
      () => call.write({ message: "⇡ this is from client" + i++ }),
      1000
    );
    console.log(response.message);
  });
  call.on("end", () => {
    console.log("❌ connection terminated");
  });
  resp.json("connection established...");
});

router.get("/info", (req, resp) => {
  //channel referenced
  //close client

  const state = getClientChannel(client).getConnectivityState(false);
  console.log(state);

  // console.log(getClientChannel(client).getTarget());

  //channel
  resp.json("info");
});

export const hello = {
  router,
  permissions: [],
  requireAuth: false,
};
