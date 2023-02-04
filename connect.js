const mongoose = require("mongoose");

const connect = async () => {
  mongoose.set("strictQuery", false);
  const con = await mongoose.connect(process.env.MONGO_DB_URI).catch((e) => {
    console.log("ERROR", e);
    process.exit(1);
  });

  if (con) console.log("USER CONNECTED TO MONGODB");
};

module.exports = connect;
