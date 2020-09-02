const regression = require('regression');
const GiaVangTB = require('../models/giavangtb');
const DuDoanGiaVang = require('../models/dudoangiavang');

const jobInHours = () => {
    return GiaVangTB.find({}, 'giaBanTB giaMuaTB').exec()
        .then(arr => {
            let n = arr.length;
            return {
                arrGiaMua: arr.map((value, index) => [++index, value.giaMuaTB]),
                arrGiaBan: arr.map((value, index) => [++index, value.giaBanTB]),
                n
            };
        })
};
// Nhập số giờ cần dự đoán
const duDoanTheoGio = (hours) => {
    return jobInHours().then(async(res) => {
        let n = res.n;
        const duDoanGiaMua = regression.linear(res.arrGiaMua, { order: 2, precision: 10 });
        const duDoanGiaBan = regression.linear(res.arrGiaBan, { order: 2, precision: 10 });
        return new DuDoanGiaVang({
            giaMuaDaDuDoan: duDoanGiaMua.predict(hours + n)[1],
            giaBanDaDuDoan: duDoanGiaBan.predict(hours + n)[1]
        });
    });
};

module.exports = duDoanTheoGio;