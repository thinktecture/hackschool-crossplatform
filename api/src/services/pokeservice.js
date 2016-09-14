'use strict';

const pokedata = [
    {
        id: 1,
        name: "Bulbasaur",
        thumbnail: "http://pokedream.com/pokedex/images/mini/001.png",
        image: "http://pokedream.com/pokedex/images/sugimori/001.jpg",
        evolvesTo: [2],
    },
    {
        id: 2,
        name: "Ivysaur",
        thumbnail: "http://pokedream.com/pokedex/images/mini/002.png",
        image: "http://pokedream.com/pokedex/images/sugimori/002.jpg",
        evolvesTo: [3],
    },
    {
        id: 3,
        name: "Venusaur",
        thumbnail: "http://pokedream.com/pokedex/images/mini/003.png",
        image: "http://pokedream.com/pokedex/images/sugimori/003.jpg",
        evolvesTo: [],
    },
    {
        id: 4,
        name: "Charmander",
        thumbnail: "http://pokedream.com/pokedex/images/mini/004.png",
        image: "http://pokedream.com/pokedex/images/sugimori/004.jpg",
        evolvesTo: [5],
    },
    {
        id: 5,
        name: "Charmeleon",
        thumbnail: "http://pokedream.com/pokedex/images/mini/005.png",
        image: "http://pokedream.com/pokedex/images/sugimori/005.jpg",
        evolvesTo: [6],
    },
    {
        id: 6,
        name: "Charizard",
        thumbnail: "http://pokedream.com/pokedex/images/mini/006.png",
        image: "http://pokedream.com/pokedex/images/sugimori/006.jpg",
        evolvesTo: [],
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
                thumbnail: p.thumbnail
            }
        })
            .toArray();
    },

    pokemon: (id) => Enumerable.from(pokedata).single(p => p.id === id),
};

module.exports = pokeService;
