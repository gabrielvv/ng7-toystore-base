/**
 * AuthGuard
 *
 * - connected ?
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { tap, take } from 'rxjs/operators';
import { AuthActions } from 'src/app/store/auth/auth.actions';

@Injectable()
export class AuthGuard implements CanActivate {

  pendingPath : string

  constructor(
    private authService: AuthService, 
    private authActions: AuthActions,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    console.log(route.url[0].path)

    return this.authService.isAuthenticated()
    .pipe(
        tap(authenticated => console.log('authenticated=', authenticated)),
        tap(authenticated => {
          if (!authenticated) {
            this.pendingPath = route.url[0].path
            this.authActions.open()
            this.authService.isAuthenticated()
              .pipe(take(2)).subscribe(isAuthenticated => {
                if(!isAuthenticated) return
                
                const path = this.pendingPath
                this.pendingPath = undefined
                this.authActions.close()
                path && this.router.navigate([path])
              })
          }
        }),
      );
  }
}