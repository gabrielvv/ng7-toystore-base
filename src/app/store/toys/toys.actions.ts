/**
 * ToysActions
 *
 * - addToys
 *    . récupérer toys si non chargés
 *
 * - selectToy
 *
 * Action types :
 * TOYS.GET_TOYS
 * TOYS.SELECT_TOY
 */
import { Injectable } from '@angular/core'
import { NgRedux } from '@angular-redux/store'
import { AppState } from '../../store'
import { Toy } from 'src/app/models/toy';
import { ToyService } from 'src/app/services/toys/toys.service'

export const TOY = {
    GET_TOYS: 'TOY.GET_TOYS',
    SELECT_TOY: 'TOY.SELECT_TOY',
}

@Injectable()
export class ToysActions {
    constructor(
        private ngRedux: NgRedux<AppState>,
        private toyService: ToyService,    
    ){}

    getToys(){
        this.toyService.getToys().subscribe(toys => {
            this.ngRedux.dispatch({
                type: TOY.GET_TOYS,
                toys
            })
        })
    }

    selectToy(toy: Toy){

    }
}

