export const sayChat = (call: any, callback: any) => {
  call.on("data", (response: any) => {
    if (response.message === "terminate") {
      call.end();
    }
    call.write({ message: "⇣ this is server response " });
    console.log(response.message);
  });
};
