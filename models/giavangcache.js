const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GiaVangCacheSchema = new Schema({
    giaMua: Number,
    giaBan: Number,
    ngayGiaoDich: Number
});

const GiaVangCache = mongoose.model('GiaVang', GiaVangCacheSchema);

module.exports = GiaVangCache;