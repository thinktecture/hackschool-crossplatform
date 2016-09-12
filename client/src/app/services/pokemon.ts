import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Pokemon} from '../models/pokemon';

@Injectable()
export class PokemonService {
    private _baseUrl: string;

    constructor(private _http: Http) {
        this._baseUrl = 'http://localhost:8090';
    }

    public getPokemonList(): Observable<Array<Pokemon>> {
        return this._http.get(`${this._baseUrl}/pokemon`)
            .flatMap(response => Observable.from(response.json()))
            .map(json => Pokemon.deserialize(json))
            .toArray();
    }

    public getPokemon(id: number): Observable<Pokemon> {
        return this._http.get(`${this._baseUrl}/pokemon/${id}`)
            .map(res => Pokemon.deserialize(res.json()));
    }
}
