// @flow

import {combineReducers, createStore} from "redux";
import type {Todo} from "../newTodo/newTodo.duck";
import {newTodoReducer} from "../newTodo/newTodo.duck";

export type Store = {
    newTodo: ?Todo;
}

/**
 * Prepare store configuration
 * @returns {Store<any>}
 */
export function configureStore () {
    const rootReducer = combineReducers({
        newTodo: newTodoReducer
    });

    return createStore(rootReducer);
}
