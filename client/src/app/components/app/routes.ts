import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from '../list/list';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ListComponent
    }
];

export const appRoutingProviders: any[] = [];
export const AppRoutes = RouterModule.forRoot(appRoutes);
