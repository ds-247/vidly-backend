require("dotenv").config();
const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function () {
  mongoose
    .connect(process.env.db)
    .then(() => winston.info("Connected to database..."))
    .catch((err) => {
      console.log("error in connecting to database");
      winston.error("error in connecting to databse...");
    });
};
