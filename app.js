require('dotenv').config();
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const { developmentDbName } = require('./utils/config');
const errorsHandler = require('./middlewares/errors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { limiter } = require('./middlewares/rate-limiter');
const routes = require('./routes');

const { PORT = 3000, NODE_ENV, DB_NAME } = process.env;
const app = express();

mongoose.connect(NODE_ENV === 'production' ? DB_NAME : developmentDbName, {
  useNewUrlParser: true,
});

app.use(helmet());

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
  next();
});

app.use(requestLogger);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(routes);

app.use(errorLogger);

app.use(errors());
app.use(errorsHandler);

app.listen(PORT);
