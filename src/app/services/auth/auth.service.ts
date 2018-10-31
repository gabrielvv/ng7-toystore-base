/**
 * AuthService
 *
 * - getUser (credentials)
 *    . http://localhost:9000/authentication?user=xxx&pass=xxx
 */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { User } from '../../models/user'
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

    url : string = `${environment.apiUrl}/authentication`
    _isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

    constructor(protected http: HttpClient){}
    
    getUser(credentials : User) : Observable<User> {
        const params = new HttpParams().set('user', credentials.user).set('pass', credentials.pass);
        return this.http.get<User>(this.url, { params })
            .pipe(
                tap(u => console.log('getUser', u)),
                tap(u => this._isAuthenticated.next(!!u))
            )
    }

    isAuthenticated() : Observable<boolean> {
        return this._isAuthenticated
    }

    logout() : Observable<Object> {
        return this.http.get(this.url)
    }
}