import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon';
import {ActivatedRoute} from '@angular/router';
import {Pokemon} from '../../models/pokemon';

@Component({
    moduleId: __moduleName,
    selector: 'detail',
    templateUrl: 'detail.html'
})
export class DetailComponent implements OnInit {
    public pokemon: Pokemon;
    public evolutions: Array<Pokemon>;

    constructor(private _route: ActivatedRoute, private _pokemonService: PokemonService) {
        this.evolutions = [];
    }

    public ngOnInit(): void {
        this._route.params.subscribe(params => {
            let id = +params['id'];
            if (!id) {
                return;
            }

            this._pokemonService.getPokemon(id)
                .subscribe(res => this.pokemon = res);
        });
    }
}
