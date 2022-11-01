import { credentials, loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
const PROTO_PATH = __dirname + "/../../protos/helloworld.proto";
const PORT = "0.0.0.0:3000";

const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const hello_proto = loadPackageDefinition(packageDefinition).helloworld;
//@ts-ignore

const client = new hello_proto.Greeter(PORT, credentials.createInsecure());

export default client;
