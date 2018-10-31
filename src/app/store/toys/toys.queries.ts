import { AppState } from "..";

/**
 * toysQueries
 *
 * - getToys
 * - getSelectedToys
 * - getToysCount
 * - getTotalPrice
 */
export function getToys(state: AppState){
    return state.toysReducer.toys
}

export function getSelectedToys(state: AppState){
    return state.toysReducer.toys.filter(t => !!t.selected)
}

export function getTotal(state: AppState){
    return getSelectedToys(state).reduce((acc, t) => acc + t.price, 0)
}