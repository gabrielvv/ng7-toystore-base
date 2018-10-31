import { AppState } from "..";

/**
 * authQueries
 *
 * - connected
 * - opened
 */
export function isOpened(state: AppState){
    return !!state.authReducer.opened
}

export function isAuthenticated(state : AppState){
    return !!state.authReducer.connected
}