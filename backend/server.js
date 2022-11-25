const app = require("./app");
const colors = require("colors");
const dotenv = require("dotenv");

//config
dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on http://localhost:${process.env.PORT}`.red.underline
  );
});
