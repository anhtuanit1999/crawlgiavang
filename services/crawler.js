const { Builder, By, Key, until } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const cheerio = require('cheerio');
const cheerioAdv = require('cheerio-advanced-selectors');
const GiaVang = require('../models/giavang');
const GiaVangTB = require('../models/giavangtb');

const priceGoldURL = "https://www.24h.com.vn/gia-vang-hom-nay-c425.html";
// Lay du lieu gia vang
function crawler() {
    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    driver.get(priceGoldURL)
        .then(() => driver.wait(until.titleIs("Giá vàng hôm nay, Gia vang Sjc online, giá vàng 9999 PNJ"), 1000))
        .then(() => driver.getPageSource())
        .then((sources) => {
            const $ = cheerio.load(sources);
            let arrGiaVang = getPriceElments($).slice(0, 9).map((ele) => {
                let giaVang = extractPriceInfo(ele);
                return giaVang;
            });
            return arrGiaVang;
        })
        .then((arrGiaVang) => {
            let giaVangTB = handleData(arrGiaVang);
            return giaVangTB;
        })
        .then(async(giaVangTB) => {
            await giaVangTB.save();
        })
        .then(() => driver.quit())
        .catch(err => console.log(err));
};

// Lay tung phan tu co chua gia vang
const getPriceElments = ($) => {
    let priceEles = [];
    $('.tabBody').find('table > tbody > tr').each((_, ele) => {
        priceEles.push(ele);
    });
    return priceEles;
};

const extractPriceInfo = (ele) => {
    let $ = cheerio.load(ele);
    // Boc tach du lieu
    let congTy = cheerioAdv.find($, 'td:eq(0) > h2').text();
    let giaMua = +cheerioAdv.find($, 'td:eq(1) > span:first').text().split(',').join('');
    let giaBan = +cheerioAdv.find($, 'td:eq(2) > span:first').text().split(',').join('');
    let giaMuaHomQua = +cheerioAdv.find($, 'td:eq(3)').text().split(',').join('');
    let giaBanHomQua = +cheerioAdv.find($, 'td:eq(4)').text().split(',').join('');
    // Tim gia chenh lech
    let lechMua = giaMua - giaMuaHomQua;
    let lechBan = giaBan - giaBanHomQua;
    return new GiaVang({
        congTy,
        giaMua,
        giaBan
    });
};
// Lay ra gia mua va ban vang trung binh cua ngay hom nay tai thoi diem hien tai
const handleData = (arrGiaVang) => {
    let n = arrGiaVang.length;
    let nGiaMua = n,
        nGiaBan = n;
    let giaMuaTB = 0,
        giaBanTB = 0;
    for (let i = 0; i < n; i++) {
        giaMuaTB += +arrGiaVang[i].giaMua;
        nGiaMua += +arrGiaVang[i].giaMua > 0 ? 0 : -1;

        giaBanTB += +arrGiaVang[i].giaBan;
        nGiaBan += +arrGiaVang[i].giaBan > 0 ? 0 : -1;
    }
    giaMuaTB = Math.round(giaMuaTB / nGiaMua);
    giaBanTB = Math.round(giaBanTB / nGiaBan);
    return new GiaVangTB({
        giaMuaTB,
        giaBanTB,
        thoiGianGiaoDich: new Date()
    });
};

module.exports = crawler;