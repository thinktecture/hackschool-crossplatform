export class Pokemon {
    public id: number;
    public name: string;
    public thumbnailUrl: string;
    public imageUrl: string;
    public evolutions: Array<number>;
    public types: Array<string>;

    public static deserialize(obj: any): Pokemon {
        let pokemon = new Pokemon();
        pokemon.id = obj.id;
        pokemon.name = obj.name;
        pokemon.thumbnailUrl = obj.thumbnail;
        pokemon.imageUrl = obj.image;
        pokemon.evolutions = obj.evolvesTo;
        pokemon.types = obj.type;

        return pokemon;
    }
}
