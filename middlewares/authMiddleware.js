// middleware/auth.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Routes allowed without token
  const openRoutes = ["/auth/login", "/auth/signup", "/"];

  // If the requested path is in openRoutes, allow it
  if (openRoutes.includes(req.path)) {
    return next();
  }

  // Otherwise token required
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ msg: "No token" });
  }

  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "No token" });
  }

  try {
    const decoded = jwt.verify(token, "secret123");
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;
