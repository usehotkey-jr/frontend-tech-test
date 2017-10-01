// @flow

import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import type {Todo} from "../newTodo/newTodo.duck";
import {newTodoReducer} from "../newTodo/newTodo.duck";
import {API} from "../api/api";

export type Store = {
    newTodo: ?Todo;
}

export type GetState<S = Store> = () => S;

/**
 * Prepare store configuration
 * @returns {Store<any>}
 */
export function configureStore () {
    const rootReducer = combineReducers({
        newTodo: newTodoReducer,
    });

    return createStore(
        rootReducer,
        applyMiddleware(thunk.withExtraArgument(API))
    );
}
