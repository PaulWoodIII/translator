var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // get rid of empty request they need languages and term to search
  var source = req.query.source
  var langs = req.query.langs
  var term = req.query.term

  if (!langs || !term || !source) {
    var err = new Error('Required Query Params Not Found');
    err.status = 404;
    return next(err);
  }

  var query = {}
  query[source] = term;

  var translations = db.findTranslations(query)
  if (!translations || translations.length === 0 ){
    var err = new Error('Term Not Found');
    err.status = 404;
    return next(err);
  }

  res.send(translations);
});

module.exports = router;
