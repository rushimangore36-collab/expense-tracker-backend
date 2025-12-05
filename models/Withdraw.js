const mongoose = require("mongoose");

const withdrawSchema = new mongoose.Schema({
  amount: Number,
  note: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Withdraw", withdrawSchema);
