const { prisma } = require('..');
const moviesData = require('../../movies-data.json');

const seedMoviesData = async () => {
  await prisma.$queryRaw`TRUNCATE TABLE public."movies" RESTART IDENTITY;`;
  console.log('🌳 Seeding data... 🌳');
  await prisma.movies.createMany({
    data: moviesData.map((movie) => {
      delete movie.id;
      return movie;
    })
  });
};

seedMoviesData();
