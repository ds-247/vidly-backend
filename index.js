const winston = require("winston");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

require("./startup/logging")();
require("./startup/validation")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/prod")(app);

const port = process.env.port || 3000;
app.listen(port, () => winston.info(`listening on port ${port}`));
