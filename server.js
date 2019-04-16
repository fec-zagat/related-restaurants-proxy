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
app.use('/', proxy({ target: 'http://ec2-54-86-57-168.compute-1.amazonaws.com:3001', changeOrigin: true }))
app.use('/', proxy({ target: 'http://ec2-52-14-95-246.us-east-2.compute.amazonaws.com:3004', changeOrigin: true }))
app.use('/', proxy({ target: 'http://3.82.223.158:3002', changeOrigin: true }))
app.use('/', proxy({ target: 'http://3.19.30.103:3003', changeOrigin: true }))


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
