import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { ToysActions } from "src/app/store/toys/toys.actions";

/**
 * ToysResolver
 *
 * - ajoute Toys
 */
@Injectable()
export class ToyDataResolver {
    constructor(private toyActions : ToysActions){}
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Subscription {
        console.log('resolve')
        return this.toyActions.getToys()
    }
}