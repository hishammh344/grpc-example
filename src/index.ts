import connectServer from "./server";
import connectGRPC from "./grpc";
import startCronJobs from "@/src/cron";

connectServer();
connectGRPC();
startCronJobs();
