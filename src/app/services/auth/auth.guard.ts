/**
 * AuthGuard
 *
 * - connected ?
 */
import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { tap, take } from 'rxjs/operators';
import { AuthActions } from 'src/app/store/auth/auth.actions';
import { isAuthenticated } from 'src/app/store/auth/auth.queries';
import { Observable, Subscription } from 'rxjs';
import { select } from '@angular-redux/store';

@Injectable()
export class AuthGuard implements CanActivate, OnDestroy {
  ngOnDestroy(): void {
    this.subscriptions.forEach(Subscription.prototype.unsubscribe.call)
  }

  @select(isAuthenticated) isAuthenticated : Observable<boolean>
  subscriptions : Subscription[] = []
  pendingPath : string

  constructor(
    private authActions: AuthActions,
    private router: Router
  ) {
      const sub = this.isAuthenticated
        .subscribe(authenticated => {
          if(!authenticated || !this.pendingPath) return
          this.redirectToPendingPath() 
        })
      
      this.subscriptions.push(sub)
  }

  redirectToPendingPath(){
    const path = this.pendingPath
    this.pendingPath = undefined
    this.authActions.close()
    path && this.router.navigate([path])
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.isAuthenticated
      .pipe(
          tap(authenticated => console.log('authenticated=', authenticated)),
          tap(authenticated => {
            if (!authenticated) {
              this.pendingPath = route.url[0].path
              this.authActions.open();
            }
          }),
      );
  }
}