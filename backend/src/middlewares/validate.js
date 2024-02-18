const { ZodError } = require('zod');
const wrapNext = require('./wrap-next');

function validate(schema) {
  wrapNext(async (req, res, next) => {
    try {
      await schema.parseAsync({
        params: req.params,
        query: req.query,
        boyd: req.body
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(422).json({
          status: 'fail',
          errors: error.errors
        });
      }
    }
  });
}

module.exports = {
  validate
};
