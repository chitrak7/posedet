'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _posedet = require('./controllers/posedet');

var _posedet2 = _interopRequireDefault(_posedet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ 'message': 'YAY! Congratulations! Your first endpoint is working' });
});
app.get('/:path', _posedet2.default.getsim);
app.listen(3000);
console.log('app running on port ', 3000);