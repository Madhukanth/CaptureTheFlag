const express = require('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();
// Db setup
mongoose.connect('mongodb://localhost/capture');

// App setup
app.use(morgan('combined'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
app.use(bodyParser({ type: '*/*' }));
router(app);
// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server Listening on the Port:', port);
