const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const openRoutes = [
    "/auth/login",
    "/auth/signup"
  ];

  // Allow login/signup routes
  if (openRoutes.includes(req.originalUrl)) {
    return next();
  }

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
