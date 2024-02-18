const app = require('./app');
const { SERVER_CONFIGS } = require('./configs');

app.listen(SERVER_CONFIGS.PORT, () => {
  console.log('Server is up and running at PORT:', SERVER_CONFIGS.PORT);
});
