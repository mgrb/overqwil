const express = require('express');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const authConfig = require('../config/auth.json');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { login } = req.body;

    try {

        if (await User.findOne({ login }))
            return res.status(400).send( { error: 'User aready exists' });
        
        const user = await User.create(req.body);
        user.password = undefined;

        return res.status(200).send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Registrtion failed' });
    }
});

router.post('/login', async (req, res) =>{
    const { login, password } = req.body;

    if (!login || !password)
        return res.status(400).send({ error: 'A Login and Password must be informed'});

    const user = await User.findOne({ login }).select('+password');

    if (!user)
        return res.status(404).send({ error: 'User not found' });

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' });

    user.password = undefined;

    const token = jwt.sign({ id: user.id}, authConfig.secret, {
        expiresIn: 86400,
    });

    res.status(200).send({ user, token });
});


module.exports = app => app.use('/auth', router);
