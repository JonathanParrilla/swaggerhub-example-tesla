'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.vehicleGET = function vehicleGET (req, res, next) {
  Default.vehicleGET(req.swagger.params, res, next);
};
