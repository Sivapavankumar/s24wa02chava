var express = require('express');
var router = express.Router();
 
/* Computation end point. */
router.get('/', function(req, res, next) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
 
  const x = req.query.x ? parseFloat(req.query.x) : randomNumber;
 
 
  res.send(`Math.fround() of ${x} is ${Math.fround(x)}<br> Math.random() applied to ${x} is ${Math.random(x)}<br> Math.round() applied to ${x} is ${Math.round(x)}`);
 
 
});

module.exports = router;
