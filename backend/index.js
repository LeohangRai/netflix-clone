require('dotenv').config();
const express = require('express');

const SERVER_PORT = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
  return res.json({
    status: 200,
    message: 'Hello there'
  });
});

app.listen(SERVER_PORT, () => {
  console.log('Server is up and running at PORT:', SERVER_PORT);
});
