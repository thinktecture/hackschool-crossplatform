'use strict';

const pokedata = [
    {
        id: 1,
        name: "Bulbasaur",
        image: "http://pokedream.com/pokedex/images/sugimori/001.jpg",
        evolvesTo: [ 2 ],
    },
    {
        id: 2,
        name: "Ivysaur",
        image: "http://pokedream.com/pokedex/images/sugimori/002.jpg",
        evolvesTo: [ 3 ],
    },
    {
        id: 3,
        name: "Venusaur",
        image: "http://pokedream.com/pokedex/images/sugimori/003.jpg",
        evolvesTo: [ ],
    },
    {
        id: 4,
        name: "Charmander",
        image: "http://pokedream.com/pokedex/images/sugimori/004.jpg",
        evolvesTo: [ 5 ],
    },
    {
        id: 5,
        name: "Charmeleon",
        image: "http://pokedream.com/pokedex/images/sugimori/005.jpg",
        evolvesTo: [ 6 ],
    },
    {
        id: 6,
        name: "Charizard",
        image: "http://pokedream.com/pokedex/images/sugimori/006.jpg",
        evolvesTo: [ ],
    },
];

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
                }
            })
            .toArray();
    },

    pokemon: (id) => Enumerable.from(pokedata).single(p => p.id === id),
};

module.exports = pokeService;
