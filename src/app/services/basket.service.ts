/**
 * ToysService
 *
 * - getToys
 *    . http://localhost:9000/toys
 */

import { Injectable } from '@angular/core'
import { BehaviorSubject, of, Observable } from 'rxjs'
import { map, tap, reduce } from 'rxjs/operators'
import { Toy } from '../models/toy'

@Injectable()
export class BasketService {
    
    private items : BehaviorSubject<Toy[]> = new BehaviorSubject<Toy[]>([])

    constructor(){}
    
    public addToy(toy: Toy) {
        const items = this.items.value
        return this.items.next([...items, toy])
    }

    public removeToy(toy: Toy){
        return this.items.next(this.items.value.filter(t => t.title !== toy.title))
    }

    public getItems() : Observable<Toy[]> {
        return this.items
    }

    public getTotal() : Observable<Number> {
        return this.items.pipe(
            map(items => items.reduce((acc, val) => acc + val.price, 0))
        )
    }
    
}