/**
 * app Routes
 * ----------
 *
 * /toys => ToysComponent
 *  - preload toy data
 *
 * /basket => BasketComponent
 *  - inaccessible si non connecté
 *
 * /autre => redirection vers ToysComponent
 */
import { Routes } from '@angular/router';
import { BasketComponent } from './containers/basket/basket.component';
import { ToysComponent } from './containers/toys/toys.component';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthComponent } from './containers/auth/auth.component';
import { ToyDataResolver } from './services/toys/toys.resolver';

export const appRoutes: Routes = [
    { path: 'login', component: AuthComponent},
    { path: 'toys', component: ToysComponent, resolve: { toys: ToyDataResolver } },
    { path: 'basket', component: BasketComponent, canActivate: [ AuthGuard ] },
    { path: '', pathMatch: 'full', redirectTo: 'toys' },
    { path: '**', redirectTo: 'toys' }
];
