import express from "express";
import client from "../../../client";
const hello = express.Router();

hello.get("/", (req, resp) => {
  let array: Array<any> = [];

  const call = client.sayHello({ name: "test" });

  call.on("data", (response: any) => {
    array.push(`<p style="font-weight: 900;     font-weight: 900;
    font-family: monospace;">${response.message}</p>`);
  });
  call.on("end", function () {
    console.log(...array);
    resp.send(
      `<body style=" background-color: #000"><div style="color: #fff; flex:1; display:flex;flex-wrap: wrap;">${array}</div></body>`
    );
  });
});

export default hello;
