const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GiaVangSchema = new Schema({
    congTy: String,
    giaMua: String,
    giaBan: String
});

const GiaVang = mongoose.model('GiaVang', GiaVangSchema);

module.exports = GiaVang;