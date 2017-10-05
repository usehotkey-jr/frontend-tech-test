// @flow

import type {Api} from "../api/api";
import type {Dispatch, GetState} from "../_helpers/types/redux";
import {todosActions} from "../todoList/todos.duck";

/**
 * Load all tasks from server
 */
export function loadTodos () {
    return (dispath: Dispatch, getState: GetState, api: Api) =>
        api.getTasks().then(response => {
            dispath(todosActions.load(response.payload));
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
