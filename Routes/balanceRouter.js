const express = require("express");
const BalanceRouter = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  getBalance,
  updateBalance,
} = require("../controllers/balanceController");

BalanceRouter.get("/getbalance", auth, getBalance);
BalanceRouter.post("/updatebalance", auth, updateBalance);

module.exports = BalanceRouter;
