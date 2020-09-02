const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const VisitorSchema = new Schema({
    khachTruyCap: Number
});

const Visitor = mongoose.model('Visitor', VisitorSchema);

module.exports = Visitor;