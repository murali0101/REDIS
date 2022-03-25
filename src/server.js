const app = require("./index");
const connect = require("./configs/db");
app.listen(6500, async () => {
  try {
    await connect();
    console.log("listening port 6500....");
  } catch (error) {
    console.log("error:", error.message);
  }
});
