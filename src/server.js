const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const { json } = require('body-parser');
const cors = require('cors');

const { config } = require('./config');
const { errorMiddleware } = require('./middlewares');
const { userRouter, mediaRouter } = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: config.client.url,
  }),
);

app.use('/user', userRouter);
app.use('/media', mediaRouter);

app.get('/', (req, res) => {
  res.status(200).send({
    data: 'hello-world',
  });
});

app.use(errorMiddleware);

module.exports = {
  app: app,
};
