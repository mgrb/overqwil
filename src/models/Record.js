const mongoose = require('../database');

const RecordSchema = new mongoose.Schema({
    ceatedAt:{
        type: Date,
        default: Date.now,
    },
    type:{
        type: String,
        require: true,
    },
    value:{
        type: Number,
        require: true,
    },
    date:{
        type: Date,
        require: true,
    },
});

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;
