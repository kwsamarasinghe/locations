'use strict';

require('dotenv').config({ silent: true });
var mongoose = require('mongoose');
var promise = require('bluebird');
var location = require('./locations.js');
mongoose.Promise = promise;
var Location = require('./models/Location.js');

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', function () {
  console.log(
    'MongoDB Connection Error. Please make sure that MongoDB is running.'
  );
  process.exit(1);
});

location.delete({})
  .then(function () {
    return location.save(10);
  })
  .then(function () {
    location.find({ latitude: { $gt: 50 } })
      .sort({ latitude: 1 })
      .then(function (results) {
        console.log(results);
        process.exit(0);
      });
  });
