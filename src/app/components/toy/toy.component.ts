/**
 * ToyComponent
 * selector: 'app-toy'
 *
 * - select : sélection de l'élément
 */
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Toy } from '../../models/toy'

@Component({
  selector: 'app-toy',
  templateUrl: './toy.html'
})
export class ToyComponent {
  @Input() toy: Toy
  @Output() select: EventEmitter<Toy> = new EventEmitter<Toy>()

  onSelect = () => {
    this.select.emit(this.toy)
  }
}
