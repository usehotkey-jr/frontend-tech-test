// @flow

import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import type {Todo} from "../newTodo/newTodo.duck";
import {newTodoReducer} from "../newTodo/newTodo.duck";
import {Api} from "../api/api";
import type {TodosStore} from "../todoList/todos.duck";
import {todosReducer} from "../todoList/todos.duck";
import type {ErrorHandling} from "../errorHandling/errorHandling.duck";
import {errorHandlingReducer} from "../errorHandling/errorHandling.duck";

export type Store = {
    newTodo: Todo;
    todos: TodosStore;
    errorHandling: ErrorHandling;
}

let store; // eslint-disable-line

/**
 * Prepare store configuration
 * @returns {Store<any>}
 */
function configureStore () {
    const rootReducer = combineReducers({
        newTodo: newTodoReducer,
        todos: todosReducer,
        errorHandling: errorHandlingReducer,
    });

    store = createStore(
        rootReducer,
        applyMiddleware(thunk.withExtraArgument(new Api()))
    );

    window.store = store;

    return store;
}

/**
 * Get store
 * @returns {Store}
 */
export function getStore () {
    if (store === undefined) {
        store = configureStore();
    }

    return store;
}
