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

const appRoutes: Routes = [
    { path: 'toys', component: ToysComponent },
    { path: 'basket', component: BasketComponent },
    { path: '**', component: ToysComponent }
];

export default appRoutes