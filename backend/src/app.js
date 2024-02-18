const express = require('express');
const cors = require('cors');
const { StatusCodes } = require('http-status-codes');
const passport = require('passport');
require('./configs/passport');
const globalErrorHandler = require('./middlewares/global-error-handler');
const moviesRouter = require('./routes/movies');
const authRouter = require('./routes/auth');
const { SERVER_CONFIGS } = require('./configs');

const CORS_OPTIONS = {
  origin: SERVER_CONFIGS.FRONTEND_URL
};

const app = express();
app.use(express.json());
app.use(cors(CORS_OPTIONS));
app.use(passport.initialize());

app.get('/', (_req, res) => {
  return res.json({
    status: StatusCodes.OK,
    message: 'Hello there'
  });
});

app.use('/movies', moviesRouter);
app.use('/auth', authRouter);

/* unhandled routes */
app.all('*', (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({
    mesage: `Route ${req.method.toUpperCase()} ${req.originalUrl} not found!`
  });
});

/* Global error-handler */
app.use(globalErrorHandler);

module.exports = app;
