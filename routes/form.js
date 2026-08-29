var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('form');
});

router.post('/', function (req, res) {
  res.render('result', {
    name: req.body.name || '',
    message: req.body.message || ''
  });
});

module.exports = router;
