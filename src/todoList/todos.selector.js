// @flow

import type {TodosStore} from "./todos.duck";
import type {Store} from "../app/store";
import {createSelector} from "reselect";
import type {Todo} from "../newTodo/newTodo.duck";

export const selectTodos = (store: Store) => store.todos;

export const selectTodosArray = createSelector(
    selectTodos,
    convertTodoMapToList,
);

/**
 * Todos {} => []
 */
export function convertTodoMapToList (todosMap: TodosStore) {
    return Object.keys(todosMap).map(todoId => todosMap[todoId]);
}

/**
 * Todos [] => {}
 */
export function convertTodoListToMap (todosList: Array<Todo>) {
    const newTodos = {};
    todosList.forEach(todo => {
        newTodos[todo.id] = todo;
    });
    return newTodos;
}
