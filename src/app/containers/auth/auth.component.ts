import { Component } from "@angular/core";
import { select } from "@angular-redux/store";
import { Observable } from "rxjs";
import * as queries from '../../store/auth/auth.queries'
import { AuthActions } from "src/app/store/auth/auth.actions";
import { User } from "src/app/models/user";
import { Router } from "@angular/router";

/**
 * AuthComponent
 * selector: 'app-auth'
 *
 * - close : ferme popup
 * - connect : connection au store
 */
@Component({
    selector: 'app-login',
    templateUrl: './auth.html'
})
export class AuthComponent {
    @select(queries.isOpened) opened : Observable<boolean>
    credentials : User = {
        user: 'toto@toto.fr',
        pass: '1234'
    }

    constructor(private authActions : AuthActions, private router: Router){
        
    }

    connect(){
        this
            .authActions
            .connect(this.credentials)
    }

    close(){
        this.authActions.close()
    }
}