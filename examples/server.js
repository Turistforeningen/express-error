const express = require('express');
const app = module.exports = express();
const error = require('../');

app.get('/error', function(req, res){
  // Caught and passed down to the errorHandler middleware
  throw new Error('something broke!');
});

app.get('/next', function(req, res, next){
  // We can also pass exceptions to next()
  process.nextTick(function(){
    next(new Error('oh no!'));
  });
});

// the error handler is placed after routes
// if it were above it would not receive errors
// from app.get() etc
app.use(error);

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
