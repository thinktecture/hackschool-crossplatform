'use strict';

const pokeService = require('../services/pokeservice');

const list = (req, res, next) => {
    let from = req.params.from;
    let to = req.params.to;

    var result = pokeService.summaryList(from, to);

    res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(JSON.stringify(result));

    return next();
};

const single = (req, res, next) => {
    let id = Number(req.params.id);
    var result = pokeService.pokemon(id);

    res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(JSON.stringify(result));

    return next();
};

const setup = (server) => {
    server.get('/pokemon', list);
    server.get('/pokemon/:id', single);
};

module.exports = {
    setup: setup,
};
