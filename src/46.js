let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Hello World' });
});

module.exports = router;
