module.exports = function (err, _req, res, _next) {
  return res.status(err.statusCode || 500).json({
    status: err.status || 'error',
    message: err.message
  });
};
