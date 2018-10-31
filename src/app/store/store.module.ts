/**
 * StoreModule
 */
import { environment } from '../../environments/environment';
import { DevToolsExtension, NgReduxModule, NgRedux } from '@angular-redux/store'
import rootReducer from './root.reducer'
import { defaultState, AppState } from '.'
import { NgModule } from '@angular/core'
import { ToysActions } from './toys/toys.actions'
import { AuthActions } from './auth/auth.actions';

@NgModule({
    declarations: [],
    imports: [
        NgReduxModule
    ],
    providers: [ ToysActions, AuthActions ],
})
export class StoreModule {
    constructor(private ngRedux: NgRedux<AppState>, private devTool: DevToolsExtension){
      const enhancers = []
      if (!environment.production) {
        enhancers.push( devTool.isEnabled() ? devTool.enhancer() : (f) => f )
      }
  
      ngRedux.configureStore(
        rootReducer,
        defaultState,
        [], // middlewares
        enhancers
      ) 
    }
  }