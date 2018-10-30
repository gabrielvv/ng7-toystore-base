/**
 * rootReducer
 *
 * - authReducer
 * - toysReducer
 */
import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { toysReducer } from './toys/toys.reducer'
import { AppState } from './index'

const rootReducer = combineReducers<AppState>({
    authReducer,
    toysReducer
})
export default rootReducer