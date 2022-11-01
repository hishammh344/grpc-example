import {
  loadPackageDefinition,
  Server,
  ServerCredentials,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { sayHello } from "./functions/sayHello";
import { sayChat } from "./functions/sayChat";
import { loginUser } from "./functions/loginUser";
import { verifyUser } from "./functions/verifyUser";
var PROTO_PATH = __dirname + "/../../protos/helloworld.proto";

const PORT = "0.0.0.0:3000";

const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const hello_proto = loadPackageDefinition(packageDefinition).helloworld;

const connectGRPC = () => {
  var server = new Server();
  //@ts-ignore
  server.addService(hello_proto.Greeter.service, {
    sayHello: sayHello,
    chat: sayChat,
    login: loginUser,
    verify: verifyUser,
  });

  server.bindAsync(PORT, ServerCredentials.createInsecure(), (error) => {
    if (error) {
      console.log("🔴 " + error);
    }
    console.log("🟢 ⇡⇣ grpc server listening on 3000...");
    server.start();
  });
};
export default connectGRPC;
