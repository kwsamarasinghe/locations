'use strict';

require('dotenv').config({ silent: true });
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Location = require('./models/Location.js');

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', function () {
  console.log(
    'MongoDB Connection Error. Please make sure that MongoDB is running.'
  );
  process.exit(1);
});

var location = new Location({
  timestamp: new Date().getTime(),
  latitude: '12.12',
  longitude: '5.14',
});

location.save(function (err, location) {
  console.log(location);
  process.exit(0);
});
