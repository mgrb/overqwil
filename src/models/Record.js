const mongoose = require('../database');

const RecordSchema = new mongoose.Schema({
    id:{
        type: Number,
        require: true,
    },
    node:{
        type: String,
        require: true,
    },
    time_utc:{
        type: Date,
        default: Date.now,
    },
    rssi:{
        type: Number,
        require: true,
    },
    snr:{
        type: Number,
        require: true,
    },
    distance_01:{type: Number,require: false,},
    distance_02:{type: Number,require: false,},
    distance_03:{type: Number,require: false,},
    distance_04:{type: Number,require: false,},
    distance_05:{type: Number,require: false,},
    distance_06:{type: Number,require: false,},
    distance_07:{type: Number,require: false,},
    distance_08:{type: Number,require: false,},
    distance_09:{type: Number,require: false,},
    distance_10:{type: Number,require: false,},
    distance_11:{type: Number,require: false,},
    distance_12:{type: Number,require: false,},
    distance_13:{type: Number,require: false,},
    distance_14:{type: Number,require: false,},
    distance_15:{type: Number,require: false,},
    distance_16:{type: Number,require: false,},
    distance_17:{type: Number,require: false,},
    distance_18:{type: Number,require: false,},
    distance_19:{type: Number,require: false,},
    distance_20:{type: Number,require: false,},
    distance_21:{type: Number,require: false,},
    distance_22:{type: Number,require: false,},
    distance_23:{type: Number,require: false,},
    distance_24:{type: Number,require: false,},
    distance_25:{type: Number,require: false,},
    distance_26:{type: Number,require: false,},
});

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;
