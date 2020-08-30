const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GiaVangTBSchema = new Schema({
    giaMuaTB: Number,
    giaBanTB: Number,
    thoiGianGiaoDich: Number
});

const GiaVangTB = mongoose.model('GiaVangTB', GiaVangTBSchema);

module.exports = GiaVangTB;