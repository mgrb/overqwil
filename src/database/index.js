const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb/cer_gateway');
// mongoose.connect('mongodb://mgrb:Qwert123@localhost/cer_gateway?authSource=admin');
// mongodb://mgrb:Qwert123@host:27017/cer_getway
// mongodb://mgrb:Qwert123@localhost:27017/
mongoose.Promise = global.Promise;

module.exports = mongoose;
