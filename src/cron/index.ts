import { printJob } from "@/src/cron/jobs/printJob";
import { helloJob } from "@/src/cron/jobs/helloJob";

const jobs = [printJob, helloJob];

const startCronJobs = () => jobs.forEach((job) => job.start());

export default startCronJobs;
