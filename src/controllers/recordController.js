const express = require('express');

const authMiddleware = require('../middlewares/auth');
const Record = require('../models/Record');

const router = express.Router();

router.use(authMiddleware);

router.post('/', async(req, res) => {
    try{
        const record = await Record.create(req.body);

        return res.status(200).send(record);
    } catch (err) {
        console.log(err);
        return res.status(400).send({error: 'Faliure recording the values'});
    }
});

module.exports = app => app.use('/record', router);
