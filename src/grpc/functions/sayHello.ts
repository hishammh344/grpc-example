export const sayHello = (call: any, callback: any) => {
  for (let i = 0; i < 1000; i++) {
    call.write({
      message:
        (Math.random() + 1).toString(36).substring(7) + call.request.name + i,
    });
  }
  call.end();
};
