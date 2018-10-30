/**
 * BasketComponent
 * selector: 'app-basket'
 *
 * - delete : supprimer élément
 */
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Toy } from '../../models/toy'
import { Observable } from 'rxjs'
import { BasketService } from 'src/app/services/basket.service';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.html'
})
export class BasketComponent {
  public toys: Observable<Toy[]>
  public total: Observable<Number>

  constructor(private basketService: BasketService){}

  ngOnInit() {
    this.toys = this.basketService.getItems()
    this.total = this.basketService.getTotal()
  }

  onDelete(toy: Toy){
    this.basketService.removeToy(toy)
  }

  onPay($event){
    
  }
}