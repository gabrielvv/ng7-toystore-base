/**
 * BasketComponent
 * selector: 'app-basket'
 *
 * - delete : supprimer élément
 */
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Toy } from '../../models/toy'
import { Observable } from 'rxjs'
import { ToysActions } from 'src/app/store/toys/toys.actions';
import { select } from '@angular-redux/store';
import * as queries from '../../store/toys/toys.queries'

@Component({
    selector: 'app-basket',
    templateUrl: './basket.html'
})
export class BasketComponent {
  @select(queries.getSelectedToys) toys: Observable<Toy[]>
  @select(queries.getTotal) total: Observable<Number>

  constructor(private toysActions: ToysActions){}

  ngOnInit() {}

  onDelete(toy: Toy){
    this.toysActions.selectToy(toy)
  }

  onPay($event){
    
  }
}