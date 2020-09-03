const GiaVangCache = require('../models/giavangcache');
const { format } = require('date-fns');
const GiaVang = require('../models/giavang');
const DuDoanGiaVang = require('../models/dudoangiavang');

const loadData = async() => {
    let giaVangCache = await GiaVangCache.findOne({});
    let { giaMua, giaBan, ngayGiaoDich } = await giaVangCache;
    return {
        giaMuaTB: formatCurrent(giaMua, 'VND'),
        giaBanTB: formatCurrent(giaBan, 'VND'),
        thoiGianGiaoDich: 'Cập nhật' + format(new Date(ngayGiaoDich), ' hh:mm (dd/MM/yyyy)')
    };
};

function formatCurrent(n, currency) {
    return (n + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,') + ' ' + currency;
}

const loadData2 = async() => {
    let top3 = await GiaVang.find({});
    let newTop3 = await top3.sort((a, b) => b.giaMua - a.giaMua).map((ele) => {
        let { congTy, giaMua } = ele;
        return {
            congTy,
            giaMua: formatCurrent(giaMua, 'VND')
        };
    });
    return newTop3;
}

const loadData3 = async() => {
    let duDoanGiaVang = await DuDoanGiaVang.find({});
    console.log({
        giaMuaDaDuDoan: formatCurrent(duDoanGiaVang[0].giaMuaDaDuDoan, 'VND'),
        giaBanDaDuDoan: formatCurrent(duDoanGiaVang[0].giaBanDaDuDoan, 'VND')
    });
    return {
        giaMuaDaDuDoan: formatCurrent(duDoanGiaVang[0].giaMuaDaDuDoan, 'VND'),
        giaBanDaDuDoan: formatCurrent(duDoanGiaVang[0].giaBanDaDuDoan, 'VND')
    };
};

module.exports = { loadData, loadData2, loadData3 };