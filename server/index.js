const express = require('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router');
const cors = require('cors');

const app = express();
// Db setup
mongoose.connect(
  'mongodb://madhu:madhu051196@ds361085.mlab.com:61085/capture-the-flag'
);

// App setup
app.use(cors());
app.options('*', cors());
app.use(morgan('combined'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(bodyParser.json());
router(app);
// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server Listening on the Port:', port);
