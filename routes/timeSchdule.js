var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
  res.render('homepage');
})

module.exports = router;
