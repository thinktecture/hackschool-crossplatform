'use strict';

const test = (req, res, next) => {
    res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(JSON.stringify({ status: 'Okay' }));

    return next();
};

const error = (req, res, next) => {
    res.writeHead(500, {
        'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(JSON.stringify({ status: 'ERROR' }));

    return next();
};

const setup = (server) => {
    server.get('/test', test);
    server.get('/error', error);
};

module.exports = {
    setup: setup,
};
