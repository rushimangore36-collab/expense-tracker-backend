const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const withdrawRouter = require("./Routes/withdrawRouter");
const balanceRouter = require("./Routes/balanceRouter");
const authRouter = require("./Routes/authRouter");

app.use("/home/api/withdraws", withdrawRouter);
app.use("/home/api", balanceRouter);
app.use("/auth", authRouter);

// MongoDB connect (FIXED)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
