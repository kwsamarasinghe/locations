'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationsSchema = new mongoose.Schema({
  timestamp: String,
  latitude: String,
  longitude: String,
});

var Stocks = mongoose.model('Stocks', locationsSchema);

module.exports = Stocks;
