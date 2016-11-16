// faux database

//imports
var _ = require('lodash');

var translations = exports.translations = [];

translations.push({en:"food",ru:"еда"})

var find = exports.findTranslations = function(query,cb){
    return _.filter(translations,query);
}

var users = exports.users = [];