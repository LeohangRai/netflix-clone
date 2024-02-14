require('dotenv').config();
const app = require('./app');
const SERVER_PORT = process.env.PORT || 8080;

app.listen(SERVER_PORT, () => {
  console.log('Server is up and running at PORT:', SERVER_PORT);
});
