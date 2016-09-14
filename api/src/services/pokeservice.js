'use strict';

const pokedata = require('./pokedata');
const Enumerable = require('linq');

const pokeService = {
    summaryList: (from, to) => {
        let query = Enumerable.from(pokedata);

        if (from)
            query = query.where(p => p.id >= from);

        if (to)
            query = query.where(p => p.id <= to);

        return query.select(p => {
            return {
                id: p.id,
                name: p.name,
                thumbnail: p.thumbnail
            }
        })
            .toArray();
    },

    singlePokemon: (id) => Enumerable.from(pokedata).single(p => p.id === id),

    byType: (name) => Enumerable.from(pokedata)
                        .where(p => Enumerable.from(p.type).contains(name))
                        .toArray(),
};

module.exports = pokeService;
