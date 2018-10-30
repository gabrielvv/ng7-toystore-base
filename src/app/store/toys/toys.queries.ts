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