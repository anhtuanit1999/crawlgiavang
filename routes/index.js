var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.get('/dudoan', function(req, res, next) {
    res.render('dudoan', { title: 'Express' });
});

router.get('/cophieu', function(req, res, next) {
    res.render('cophieu', { title: 'Express' });
});

module.exports = router;