var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: 'node-study' });
});

module.exports = router;
