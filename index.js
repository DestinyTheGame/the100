#!/usr/bin/env node

'use strict';

var request = require('request')
  , browser = require('open')
  , growl = require('growl')
  , argv = require('argh').argv;

/**
 * Check if a group is available.
 *
 * @param {String} group URL of the group to check.
 * @param {Number} interval Interval for checking.
 * @api private
 */
function available(group, interval) {
  var full = 'This group is full, but';

  request({
    url: 'https://www.the100.io/groups/' + group,
    method: 'GET'
  }, function requested(err, res, body) {
    if (err || ~(body || '').indexOf(full)) {
      console.log('- '+ group + ' is still not available');
      return setTimeout(available.bind(this, group, interval), interval || 3000);
    }

    growl('The group has a spot available! quick! Join all the things');
    browser(group);
  });
}

available(argv.group, +argv.interval);
