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
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';

export const AUTH = {
    OPEN: 'AUTH.OPEN',
    CLOSE: 'AUTH.CLOSE',
    CONNECT: 'AUTH.CONNECT',
    LOGOUT: 'AUTH.LOGOUT'
}

@Injectable()
export class AuthActions {
    constructor(private ngRedux: NgRedux<AppState>, private authService: AuthService){}

    connect(credentials : User){
        return this.authService.getUser(credentials).subscribe(u => {
            this.ngRedux.dispatch({
                type: AUTH.CONNECT
            })
        })
    }

    logout(){
        return this.authService.logout().subscribe(u => {
            this.ngRedux.dispatch({
                type: AUTH.LOGOUT
            })
        })
    }

    close(){
        this.ngRedux.dispatch({
            type: AUTH.CLOSE
        })
    }

    open(){
        this.ngRedux.dispatch({
            type: AUTH.OPEN
        })
    }
}