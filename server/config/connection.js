const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gtx-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

let connection = mongoose.connection;

connection.on("error", () => {
  console.log(`${connection.name} connection error: ${connection.name}`);
});

connection.on("connected", () => {
  console.log(`MongoDB connection successful on: ${connection.name}`);
});

module.exports = mongoose.connection;
