// @flow

import type {TodosStore} from "./todos.duck";
import type {Store} from "../app/configureStore";
import {createSelector} from "reselect";

export const selectTodos = (store: Store) => store.todos;

export const selectTodosArray = createSelector(
    selectTodos,
    (todos: TodosStore) => Object.keys(todos).map(todoId => todos[todoId]),
);
