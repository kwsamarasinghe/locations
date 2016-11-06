'use strict';

var Location = require('./models/Location.js');
var promise = require('bluebird');

module.exports = {
  save: function (length) {
    var promises = [];

    for (var i = 0; i < length; i++) {

      var location = new Location({
        timestamp: new Date().getTime(),
        latitude:  Math.random() * 100,
        longitude: Math.random() * 100,
      });

      promises.push(location.save());
    }

    return promise.all(promises);
  },

  find: function (query) {
    return Location.find(query);
  },

  delete: function (query) {
    return Location.find(query).remove();
  },
};
