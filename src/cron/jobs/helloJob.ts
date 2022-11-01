import { CronJob } from "cron";

export const helloJob = new CronJob(
  "25 16 * * *",
  function () {
    console.log("You will see this hello job at specific time");
  },
  null,
  true,
  "Asia/Riyadh"
);
