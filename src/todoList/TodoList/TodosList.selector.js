// @flow

import type {Todo} from "../../newTodo/newTodo.duck";
import {createSelector} from "reselect";
import {selectTodosArray} from "../todos.selector";

export const selectTodosList = createSelector(
    selectTodosArray,
    (todos: Array<Todo>) => ({todos}),
);
