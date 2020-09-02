const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DuDoanGiaVangSchema = new Schema({
    giaMuaDaDuDoan: Number,
    giaBanDaDuDoan: Number
});

const DuDoanGiaVang = mongoose.model('DuDoanGiaVang', DuDoanGiaVangSchema);

module.exports = DuDoanGiaVang;