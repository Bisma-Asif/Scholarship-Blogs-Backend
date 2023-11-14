const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("Connect DB");
  return mongoose.connect(uri);
};

module.exports = connectDB;
