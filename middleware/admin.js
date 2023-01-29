module.exports = function (req, res, next) {
  if (!process.env.requiresAuth) return next();
  if (!req.user.isAdmin) return res.status(403).send("Access denied...");
  next();
};
