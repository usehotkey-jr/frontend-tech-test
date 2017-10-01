// @flow

import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import type {Todo} from "../newTodo/newTodo.duck";
import {newTodoReducer} from "../newTodo/newTodo.duck";
import {Api} from "../api/api";
import type {TodosStore} from "../todoList/todos.duck";
import {todosReducer} from "../todoList/todos.duck";

export type Store = {
    newTodo: Todo;
    todos: TodosStore;
}

/**
 * Prepare store configuration
 * @returns {Store<any>}
 */
export function configureStore () {
    const rootReducer = combineReducers({
        newTodo: newTodoReducer,
        todos: todosReducer,
    });

    return createStore(
        rootReducer,
        applyMiddleware(thunk.withExtraArgument(new Api()))
    );
}
