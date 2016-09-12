import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from '../list/list';
import {DetailComponent} from '../detail/detail';


const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ListComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    }
];

export const appRoutingProviders: any[] = [];
export const AppRoutes = RouterModule.forRoot(appRoutes);


