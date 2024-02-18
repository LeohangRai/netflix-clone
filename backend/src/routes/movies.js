const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const moviesData = require('../database/seeders/data/movies-data.json');
const { delay } = require('../utils');

router.get('/', async (req, res) => {
  const offset = parseInt(req.query.offset) || 0;
  const limit = 12;
  const paginatedMoviesData = [...moviesData].slice(offset, offset + limit);
  await delay(3000); // simulate network delay
  return res.json({
    movies: paginatedMoviesData,
    total: moviesData.length
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const movie = moviesData.find((movie) => movie.id == id);
  if (!movie) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: 'Movie not found!'
    });
  }
  return res.send(movie);
});

module.exports = router;
