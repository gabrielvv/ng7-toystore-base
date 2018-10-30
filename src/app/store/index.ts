/**
 * - definir interfaces AuthState et ToysState
 * - definir interface AppState
 * - definir defaultState
 */
import { AuthState, defaultAuthState } from './auth/auth.reducer'
import { ToyState, defaultToysState } from './toys/toys.reducer'

export interface AppState {
    authReducer: AuthState
    toysReducer: ToyState
}

export const defaultState : AppState = {
    authReducer: defaultAuthState,
    toysReducer: defaultToysState
}