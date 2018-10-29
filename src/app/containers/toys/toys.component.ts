/**
 * ToysComponent
 * selector: 'app-toys'
 *
 * - onSelect : select element
 */
import { Component, OnInit } from '@angular/core'
import { Toy } from 'src/app/models/toy'

@Component({
  selector: 'app-toys',
  templateUrl: './toys.html'
})
export class ToysComponent implements OnInit {
  public toys: Toy[]

  ngOnInit() {
    this.toys = [
      {
        'title': 'ball',
        'icon': 'airballoon',
        'price': 5
      },
      {
        'title': 'plane',
        'icon': 'airplane',
        'price': 35
      },
      {
        'title': 'ambulance',
        'icon': 'ambulance',
        'price': 15
      }
    ]
  }

  public onSelect = (toy: Toy) => {
    toy.selected = !toy.selected
  }
}
