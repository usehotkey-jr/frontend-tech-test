// @flow

import {combineReducers, createStore} from "redux";
import {Todo, newTodoReducer} from "../newTodo/newTodo.duck";

export type Store = {
    newTodo: ?Todo;
}

/**
 * Prepare store configuration
 * @returns {Store<any>}
 */
export function configureStore () {
    const rootReducer = combineReducers({
        app: (state = "Hello, World!") => state,
        newTodo: newTodoReducer
    });

    return createStore(rootReducer);
}
