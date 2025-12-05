const express = require("express");
const withdrawRouter = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  createWithdraw,
  getAllWithdraws,
  deleteWithdraw,
} = require("../controllers/withdrawController");

// Correct routes
withdrawRouter.post("/", authMiddleware, createWithdraw);
withdrawRouter.get("/", authMiddleware, getAllWithdraws);
withdrawRouter.delete("/:id", authMiddleware, deleteWithdraw);

module.exports = withdrawRouter;
