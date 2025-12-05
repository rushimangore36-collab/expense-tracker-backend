// controllers/withdrawController.js
const Withdraw = require("../models/Withdraw"); // ensure this path is correct

const User = require("../models/User");

const createWithdraw = async (req, res) => {
  const { amount, note } = req.body;

  const w = await Withdraw.create({
    amount,
    note,
    userId: req.userId,
  });

  await User.findByIdAndUpdate(req.userId, {
    $inc: { balance: -amount },
  });

  res.json(w);
};

const getAllWithdraws = async (req, res) => {
  const withdraws = await Withdraw.find({ userId: req.userId });
  res.json(withdraws);
};

const deleteWithdraw = async (req, res) => {
  try {
    const deleted = await Withdraw.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createWithdraw,
  getAllWithdraws,
  deleteWithdraw,
};
