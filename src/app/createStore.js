// @flow

import {combineReducers, createStore} from "redux";
import {Todo, editedTodoReducer} from "../editedTodo/editedTodo.duck";

export type Store = {
    editedTodo: Todo;
}

/**
 * Prepare store configuration
 * @returns {Store<any>}
 */
export function configureStore () {
    const rootReducer = combineReducers({
        app: (state = "Hello, World!") => state,
        editedTodo: editedTodoReducer
    });

    return createStore(rootReducer);
}
