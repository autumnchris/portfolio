const express = require('express');
const mongoose = require('mongoose');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use(express.static(`${__dirname}/public`));

app.listen(port, console.log(`Server is listening at port ${port}.`));
