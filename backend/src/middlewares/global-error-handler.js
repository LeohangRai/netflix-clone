const { StatusCodes } = require('http-status-codes');

module.exports = function (err, _req, res, _next) {
  return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: err.status || 'error',
    message: err.message
  });
};
