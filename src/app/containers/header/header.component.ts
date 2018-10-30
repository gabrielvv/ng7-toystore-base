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

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent {
  public items : Observable<Toy[]>

  constructor(private basketService : BasketService){
    console.log('constructor')
    this.items = basketService.getItems()
  }

}