const express = require('express');
const morgan = require('morgan');
const path = require('path');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;
const proxy = require('http-proxy-middleware');

app.use(morgan('dev'));
app.use(cors());
app.use('/r/:restaurants', express.static(path.join(__dirname, 'public')));
app.use('/', proxy({ target: 'http://localhost:3004', changeOrigin: true }))
app.use('/', proxy({ target: 'http://localhost:3001', changeOrigin: true }))
app.use('/', proxy({ target: 'http://localhost:3002', changeOrigin: true }))
app.use('/', proxy({ target: 'http://localhost:3003', changeOrigin: true }))


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
