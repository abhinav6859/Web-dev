

const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGODB_URI =
    "mongodb+srv://abhinavvats06665_db_user:abhin123@cluster0.hzvm807.mongodb.net/express";

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};
module.exports = connectDB;
