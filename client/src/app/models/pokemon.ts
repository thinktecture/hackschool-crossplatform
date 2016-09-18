export class Pokemon {
    public id: number;
    public name: string;
    public thumbnail: string;

    public static deserialize(obj: any): Pokemon {
        let pokemon = new Pokemon();
        pokemon.id = obj.id;
        pokemon.name = obj.name;
        pokemon.thumbnail = obj.thumbnail;
        return pokemon;
    }
}
