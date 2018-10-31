/**
 * ToysService
 *
 * - getToys
 *    . http://localhost:9000/toys
 */

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map, tap, pairwise } from 'rxjs/operators';
import { Toy } from '../../models/toy'

import { environment } from '../../../environments/environment';

@Injectable()
export class ToyService {
    
    private url = environment.apiUrl + '/toys';  // URL to web api

    constructor(protected http: HttpClient){}
    
    protected handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.error(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    
    public getToys(): Observable<Toy[]> {
        return this.http.get<Toy[]>(`${this.url}`).pipe(
            tap(_ => console.log(`fetched Toys`)),
        )
    }
    
}