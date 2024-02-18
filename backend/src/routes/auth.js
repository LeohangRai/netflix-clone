const router = require('express').Router();
const { registerUser } = require('../controllers/auth.controller');
const wrapNext = require('../middlewares/wrap-next');
const { validate } = require('../middlewares/validate');
const { registerUserSchema } = require('../schemas/auth.schema');

router.post('/signup', validate(registerUserSchema), wrapNext(registerUser));

module.exports = router;
