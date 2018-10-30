import { Action } from "redux";
import { TOY } from './toys.actions'
import { Toy } from '../../models/toy'
import { ActionSequence } from "protractor";
/**
 * toysReducer
 *
 * state :
 * { toys: toys array }
 */

export function toysReducer(state : ToyState = defaultToysState, action: any) {
    switch(action.type) {
        case TOY.GET_TOYS:
            return {
                ...state,
                toys: action.toys
            }
        case TOY.SELECT_TOY:
            return {
                ...state,
                toys: state.toys.map(t => {
                    return t
                })
            }
    }
    return state;
}

export const defaultToysState : ToyState = {
    toys: [],
}

export interface ToyState {
    toys: Toy[]
}