const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || 'development';
const VERSION = process.env.VERSION || '1.0.0';

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    service: 'logistics-pickup',
    environment: APP_ENV,
    version: VERSION,
    status: 'running'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'logistics-pickup'
  });
});

app.get('/version', (req, res) => {
  res.status(200).json({
    version: VERSION,
    service: 'logistics-pickup'
  });
});

const server = app.listen(PORT, () => {
  console.log(`Pickup Service running on port ${PORT} in ${APP_ENV} mode`);
});

module.exports = { app, server };
