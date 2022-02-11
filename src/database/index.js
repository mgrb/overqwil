const mongoose = require('mongoose');

mongoose.connect('mongodb://mgrb:Qwert123@localhost/cer_getway?authSource=admin');
// mongodb://mgrb:Qwert123@host:27017/cer_getway
// mongodb://mgrb:Qwert123@localhost:27017/
mongoose.Promise = global.Promise;

module.exports = mongoose;
