require('dotenv').config();

const SERVER_CONFIGS = {
  PORT: process.env.PORT || 8080,
  JWT_SECRET: process.env.JWT_SECRET,
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173'
};

const DB_CONFIGS = {
  URL: process.env.DATABASE_URL
};

module.exports = {
  SERVER_CONFIGS,
  DB_CONFIGS
};
