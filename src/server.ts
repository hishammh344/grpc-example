import app from "./express";
const connectServer = () => {
  app.listen(8000, () => {
    console.log(`🟢 ⇡⇣ server listening on ${8000}...`);
  });
};

export default connectServer;
