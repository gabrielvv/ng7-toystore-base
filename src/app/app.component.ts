/**
 * App Component
 */
import { Component } from '@angular/core'
import { select } from "@angular-redux/store";
import { Router } from "@angular/router";
import * as queries from './store/auth/auth.queries'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class AppComponent {
  @select(queries.isOpened) opened : Observable<boolean>

  constructor(private router : Router){
    this.opened.subscribe(b => {
        if(!b) {
          this.router.navigate(['']);
        } else {
          this.router.navigate(['login']);
        }
    })
  }
}
