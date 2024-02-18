const router = require('express').Router();
const passport = require('passport');
const { StatusCodes } = require('http-status-codes');
const { registerUser } = require('../controllers/auth.controller');
const wrapNext = require('../middlewares/wrap-next');
const { validate } = require('../middlewares/validate');
const { registerUserSchema } = require('../schemas/auth.schema');
const CustomError = require('../errors/custom-error');

router.post('/signup', validate(registerUserSchema), wrapNext(registerUser));

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(new CustomError(info?.message, StatusCodes.BAD_REQUEST));
    }
    return res.json(user);
  })(req, res, next);
});

module.exports = router;
