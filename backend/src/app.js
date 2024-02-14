const express = require('express');
const cors = require('cors');
const moviesRouter = require('./routes/movies');

const CORS_OPTIONS = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
};

const app = express();
app.use(cors(CORS_OPTIONS));

app.get('/', (_req, res) => {
  return res.json({
    status: 200,
    message: 'Hello there'
  });
});

app.use('/movies', moviesRouter);

app.all('*', (req, res) => {
  return res.status(404).json({
    mesage: `Route ${req.method.toUpperCase()} ${req.originalUrl} not found!`
  });
});

module.exports = app;
