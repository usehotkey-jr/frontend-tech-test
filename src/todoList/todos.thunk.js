// @flow

import type {Api} from "../api/api";
import type {Dispatch, GetState} from "../_helpers/types/redux";
import {todosActions} from "../todoList/todos.duck";
import type {Todo} from "../newTodo/newTodo.duck";
import {selectTodos} from "./todos.selector";

/**
 * Load all tasks from server
 */
export function loadTodos () {
    return (dispatch: Dispatch, getState: GetState, api: Api) =>
        api.getTasks().then(response => {
            dispatch(todosActions.load(response.payload));
        });
}

/**
 * Remove task from list
 */
export function removeTodo (id: number) {
    return (dispath: Dispatch, getState: GetState, api: Api) =>
        api.delete(id).then(response => {
            dispath(todosActions.remove(response.payload));
        });
}

export type TodoTitleOrDescriptionKey = "title" | "description";
export type UpdateTodoParams = [number, TodoTitleOrDescriptionKey, string, boolean];

/**
 * Remove task from list
 */
export function updateTodo (params: UpdateTodoParams) {
    return (dispatch: Dispatch, getState: GetState, api: Api): Promise<mixed> => {
        const [id, key, value, onServer] = params;
        const currentTodo = selectTodos(getState())[id];

        const newTodo: Todo = {
            ...currentTodo,
            [key]: value,
        };

        if (onServer) {
            return api.update(newTodo)
                .then(response => dispatch(todosActions.update(response.payload)));
        }

        return Promise.resolve()
            .then(() => dispatch(todosActions.update(newTodo)));
    };
}
