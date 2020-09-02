var express = require('express');
var router = express.Router();
const { loadData, loadData2, loadData3 } = require('../services/loaddata');
const Visitor = require('../models/visitor');
const DuDoanGiaVang = require('../models/dudoangiavang');


/* GET home page. */
let luotKhachTruyCap = new Visitor({
    khachTruyCap: 127
});
Visitor.deleteMany({});
luotKhachTruyCap.save();
router.get('/', async function(req, res, next) {
    luotKhachTruyCap.khachTruyCap++;
    await Visitor.deleteMany({});
    await luotKhachTruyCap.save();
    let giaVangCache = await loadData();
    let top3 = await loadData2();
    // console.log(luotKhachTruyCap.khachTruyCap);
    res.render('index', { giaVangCache, top3, luotKhachTruyCap });
});

router.get('/about', function(req, res, next) {
    res.render('about');
});

router.get('/contact', function(req, res, next) {
    res.render('contact');
});

router.get('/dudoan', async function(req, res, next) {
    let duDoanGiaVang = await loadData3();
    console.log(duDoanGiaVang);
    res.render('dudoan', { duDoanGiaVang });
});

router.get('/cophieu', function(req, res, next) {
    res.render('cophieu');
});

module.exports = router;