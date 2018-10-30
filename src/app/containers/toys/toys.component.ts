/**
 * ToysComponent
 * selector: 'app-toys'
 *
 * - onSelect : select element
 */
import { Component, OnInit } from '@angular/core'
import { Toy } from 'src/app/models/toy'
import { ToyService } from 'src/app/services/toys/toys.service';
import { BasketService } from 'src/app/services/basket.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-toys',
  templateUrl: './toys.html'
})
export class ToysComponent implements OnInit {
  public toys: Observable<Toy[]>

  constructor(private toyService: ToyService, private basketService : BasketService){

  }

  ngOnInit() {
    this.toys = this.toyService.getToys()
  }

  public onSelect = (toy: Toy) => {
    toy.selected = !toy.selected
    toy.selected 
    ? this.basketService.addToy(toy)
    : this.basketService.removeToy(toy);
  }
}
