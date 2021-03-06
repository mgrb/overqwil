const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

require('./controllers/recordController')(app);
require('./controllers/authController')(app);

console.log('SERVER ON: http://localhost:3000/');

app.listen(3000);
