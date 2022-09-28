import {
  loadPackageDefinition,
  Server,
  ServerCredentials,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
var PROTO_PATH = __dirname + "/../../protos/helloworld.proto";

const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const hello_proto = loadPackageDefinition(packageDefinition).helloworld;

const sayHello = (call: any, callback: any) => {
  for (let i = 0; i < 1000; i++) {
    call.write({
      message:
        (Math.random() + 1).toString(36).substring(7) + call.request.name + i,
    });
  }
  call.end();
};

const connectGRPC = () => {
  var server = new Server();
  //@ts-ignore
  server.addService(hello_proto.Greeter.service, { sayHello: sayHello });
  server.bindAsync(
    "0.0.0.0:3000",
    ServerCredentials.createInsecure(),
    (error) => {
      if (error) {
        console.log("🔴 " + error);
      }
      console.log("🟢 ⇡⇣ grpc server listening on 3000...");
      server.start();
    }
  );
};
export default connectGRPC;
