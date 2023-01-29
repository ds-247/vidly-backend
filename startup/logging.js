require("express-async-errors");
const winston = require("winston");

module.exports = function () {
  // logging the exceptions that are outside the scope of express
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({
      filename: "uncaughtExceptions.log",
      level: "error",
    })
  );

  process.on("unhandledRejection", (ex) => {
    throw ex;
  });

  const files = new winston.transports.File({ filename: "loggings.log" });
  const console = new winston.transports.Console();

  winston.add(console);
  winston.add(files);

  // winston.add(
  //   // new winston.transports.File({
  //   //   filename: "errors.log",
  //   //   level: "error",
  //   // }),
  //   new winston.transports.Console()
  // );
};
