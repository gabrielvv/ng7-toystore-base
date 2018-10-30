import { Action } from "redux";
import { AUTH } from './auth.actions'

export interface AuthState {
    connect: boolean
    opened: boolean
} 

/**
 * toysReducer
 *
 * state :
 * { connected boolean, opened boolean }
 */
export function authReducer(state : AuthState = defaultAuthState, action : Action) {
    switch (action.type) {
        case AUTH.CLOSE:
        case AUTH.CONNECT:
        case AUTH.OPEN:
        default:
            return state
    } 
}

export const defaultAuthState : AuthState = {
    connect: false,
    opened: false,
}