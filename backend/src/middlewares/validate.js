const { ZodError } = require('zod');
const { StatusCodes } = require('http-status-codes');
const wrapNext = require('./wrap-next');

function validate(schema) {
  return wrapNext(async (req, res, next) => {
    try {
      await schema.parseAsync({
        params: req.params,
        query: req.query,
        body: req.body
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
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
