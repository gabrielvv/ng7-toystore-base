/**
 * AuthActions
 *
 * - open
 * - close
 * - connect
 *    . récupérer users
 *    . check user valid
 *    . si valid, fermer fenêtre et router vers /basket
 *
 * Action types :
 * AUTH.OPEN
 * AUTH.CLOSE
 * AUTH.CONNECT
 */
import { Injectable } from '@angular/core'
import { NgRedux } from '@angular-redux/store'
import { AppState } from '../../store'

export const AUTH = {
    OPEN: 'AUTH.OPEN',
    CLOSE: 'AUTH.CLOSE',
    CONNECT: 'AUTH.CONNECT'
}

@Injectable()
export class AuthActions {
    constructor(private ngRedux: NgRedux<AppState>){}
}