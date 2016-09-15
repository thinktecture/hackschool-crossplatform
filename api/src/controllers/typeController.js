'use strict';

const pokeService = require('../services/pokeservice');

const type = (req, res, next) => {

    let name = req.params.name;
    var result = pokeService.byType(name);

    res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(JSON.stringify(result));

    return next();
};

const setup = (server) => {
    server.get('/type/:name', type);
};

module.exports = {
    setup: setup,
};
