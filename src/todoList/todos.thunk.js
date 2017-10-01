// @flow

import type {Api} from "../api/api";
import type {Dispatch, GetState} from "../_helpers/types/redux";
import {todosActions} from "../todoList/todos.duck";

/**
 * Load all todos from server
 */
export function loadTodos () {
    return (dispath: Dispatch, getState: GetState, api: Api) =>
        api.getTasks().then(response => {
            dispath(todosActions.load(response.payload));
        });
}
