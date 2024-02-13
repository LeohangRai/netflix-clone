require('dotenv').config();
const express = require('express');
const cors = require('cors');
const moviesData = require('./movies-data.json');

const SERVER_PORT = process.env.PORT || 8080;
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

app.get('/movies', (req, res) => {
  const offset = parseInt(req.query.offset) || 0;
  const limit = 12;
  const paginatedMoviesData = [...moviesData].slice(offset, offset + limit);
  return res.json({
    movies: paginatedMoviesData,
    total: moviesData.length
  });
});

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const movie = moviesData.find((movie) => movie.id == id);
  if (!movie) {
    return res.status(404).json({
      message: 'Movie not found!'
    });
  }
  return res.send(movie);
});

app.listen(SERVER_PORT, () => {
  console.log('Server is up and running at PORT:', SERVER_PORT);
});
