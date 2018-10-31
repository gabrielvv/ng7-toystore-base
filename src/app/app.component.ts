/**
 * App Component
 */
import { Component, OnDestroy } from '@angular/core'
import { select } from "@angular-redux/store";
import { Router } from "@angular/router";
import * as queries from './store/auth/auth.queries'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class AppComponent implements OnDestroy {
  
  subscriptions : Subscription[] = []
  @select(queries.isOpened) isLoginPageOpened : Observable<boolean>
  @select(queries.isAuthenticated) isAuthenticated : Observable<boolean>

  ngOnDestroy(): void {
    this.subscriptions.forEach(Subscription.prototype.unsubscribe.call)
  }

  constructor(private router : Router){
    // MAP STATE AND AND ROUTING

    this.subscriptions.push(this.isAuthenticated.subscribe(b => {
      if(!b){
        this.router.navigate(['']);
      }
    }))

    this.subscriptions.push(this.isLoginPageOpened.subscribe(b => {
        if(!b) {
          this.router.navigate(['']);
        } else {
          this.router.navigate(['login']);
        }
    }))
  }
}
