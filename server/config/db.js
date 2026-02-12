const mongoose = require("mongoose");

const DBURL = "mongodb://127.0.0.1:27017/mydb";

async function connectDB() {
  try {
    await mongoose.connect(DBURL);
    console.log("Connected to database");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connectDB;
