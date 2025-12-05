const User = require("../models/User");

exports.getBalance = async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({ balance: user.balance });
};

exports.updateBalance = async (req, res) => {
  const { balance } = req.body;

  const user = await User.findByIdAndUpdate(
    req.userId,
    { balance },
    { new: true }
  );

  res.json({ balance: user.balance });
};
