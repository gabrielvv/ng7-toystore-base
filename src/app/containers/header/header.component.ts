/**
 * HeaderComponent
 * selector: 'app-header'
 *
 * - auth
 *    . si connecté router vers basket
 *    . si non connecté ouvrir auth popup
 */
import { Component } from '@angular/core'
import { BasketService } from 'src/app/services/basket.service';
import { Observable } from 'rxjs';
import { Toy } from '../../models/toy'
import { ToysActions } from 'src/app/store/toys/toys.actions';
import { select } from '@angular-redux/store';
import * as toyQueries from '../../store/toys/toys.queries'
import * as authQueries from '../../store/auth/auth.queries'
import { AuthActions } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent {
  @select(toyQueries.getSelectedToys) items : Observable<Toy[]>
  @select(authQueries.isAuthenticated) isAuthenticated : Observable<boolean>

  constructor(private toysActions: ToysActions, private authActions : AuthActions){}

  login(){
    this.authActions.open()
  }

  logout(){
    this.authActions.logout()
  }
}