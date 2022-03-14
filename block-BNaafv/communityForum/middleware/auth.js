var jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: async (req, res, next) => {
    var token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({ error: 'token required' });
    }
    try {
      var payload = await jwt.verify(token, process.env.SECRET);
      req.user = payload;
      next();
    } catch (error) {
      next(error);
    }
  },
};