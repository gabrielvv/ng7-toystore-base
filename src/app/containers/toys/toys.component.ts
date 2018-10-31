/**
 * ToysComponent
 * selector: 'app-toys'
 *
 * - onSelect : select element
 */
import { Component, OnInit } from '@angular/core'
import { Toy } from 'src/app/models/toy'
import { Observable } from 'rxjs'
import { ToysActions } from 'src/app/store/toys/toys.actions';
import { select } from '@angular-redux/store';
import * as queries from '../../store/toys/toys.queries'

@Component({
  selector: 'app-toys',
  templateUrl: './toys.html'
})
export class ToysComponent implements OnInit {
  @select(queries.getToys) toys: Observable<Toy[]>

  constructor(private toysActions: ToysActions){}

  ngOnInit() {}

  public onSelect = (toy: Toy) => {
    this.toysActions.selectToy(toy)
  }
}
