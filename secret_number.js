"use strict";
module.exports = function() {
  const secretNumber = Math.floor(Math.random() * 1000000);

  function secretNumberGenerator() {
    return secretNumber;
  }

  return secretNumberGenerator;
};
