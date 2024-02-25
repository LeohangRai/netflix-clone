const passport = require('passport');
const CustomError = require('../errors/custom-error');

function authenticateJWT(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(new CustomError(info?.message, 400));
    }
    req.user = user;
    return next();
  })(req, res, next);
}

module.exports = {
  authenticateJWT
};
