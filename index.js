/* eslint no-unused-vars: [2, {vars: "all", args: "none"}], no-console: 0 */
'use strict';

module.exports = function expressErrorHandler(err, req, res, next) {
  err.status = err.status || 500;

  if (err.status >= 500) {
    if (err.error) {
      console.error(err.error.message);
      console.error(err.error.stack);
    } else {
      console.error(err.message);
      console.error(err.stack);
    }
  }

  res.status(err.status);

  if (typeof err.json === 'function') {
    res.json(err.json());
  } else {
    res.json({status: err.status, message: err.message});
  }
};
