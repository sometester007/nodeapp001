var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('users list');
  let users=[{name:"logan",age:12},{name:"logan",age:22}];
  res.json(users);
});
router.get('/:id', (req, res, next)=> {
  res.send(req.params.id);
});

module.exports = router;
