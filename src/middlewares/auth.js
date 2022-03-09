const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ error: 'No token provided'});

    const headerParts = authHeader.split(' ');

    if (!headerParts.length === 2)
        return res.status(401).send({ error: 'Token error'});

    const [ scheam, token ] = headerParts;

    if (!/^Bearer$/i.test(scheam))
        return res.status(401).send({ error: 'Token malformated'});

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Invalid token' });

        req.userId = decoded.id;
        return next();
    });
};
