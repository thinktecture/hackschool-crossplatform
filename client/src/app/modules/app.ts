import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppRoutes, appRoutingProviders} from '../components/app/routes';
import {ListComponent} from '../components/list/list';
import {AppComponent} from '../components/app/app';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {PokemonService} from '../services/pokemon';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutes
    ],
    declarations: [ListComponent, AppComponent],
    bootstrap: [AppComponent],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        appRoutingProviders,
        PokemonService
    ]
})
export class AppModule {

}
