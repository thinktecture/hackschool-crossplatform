import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Pokemon} from '../models/pokemon';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PokemonService {
    private _baseUrl: string;

    constructor(private _http: Http) {
        this._baseUrl = 'http://10.172.10.234:8090';
    }

    public getPokemonList(): Observable<Array<Pokemon>> {
        return this._http.get(`${this._baseUrl}/pokemon`)
            .flatMap(response => Observable.from(response.json()))
            .map(pokemonObject => Pokemon.deserialize(pokemonObject))
            .toArray();
    }
}
