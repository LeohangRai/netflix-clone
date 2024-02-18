require('dotenv').config();

const SERVER_CONFIGS = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET
};

const DB_CONFIGS = {
  URL: process.env.DATABASE_URL
};

module.exports = {
  SERVER_CONFIGS,
  DB_CONFIGS
};
