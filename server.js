'use strict';

const express = require('express');
const path = require('path');
const debug = require('debug')('server');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

app.use(express.static('dist'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, HOST);
debug(`Running on http://${HOST}:${PORT}`);
