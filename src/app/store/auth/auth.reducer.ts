import { Action } from "redux";
import { AUTH } from './auth.actions'

export interface AuthState {
    connected: boolean
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
        case AUTH.OPEN:
            return {
                ...state,
                opened: true
            }
        case AUTH.CLOSE:
            return {
                ...state,
                opened: false
            }
        case AUTH.CONNECT:
            return {
                ...state,
                connected: true
            }
        case AUTH.LOGOUT:
            return {
                ...state,
                connected: false
            }
        default:
            return state
    } 
}

export const defaultAuthState : AuthState = {
    connected: false,
    opened: false,
}