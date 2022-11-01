import { CronJob } from "cron";

export const printJob = new CronJob(
  "* * * * * *",
  function () {
    console.log("You will see this message every second");
  },
  null,
  true,
  "Asia/Riyadh"
);
