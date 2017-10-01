// @flow

import type {Api} from "../api/api";
import type {Dispatch, GetState} from "../_helpers/types/redux";
import {selectNewTodo} from "./newTodo.selector";
import {newTodoActions} from "./newTodo.duck";
import {todosActions} from "../todoList/todos.duck";

/**
 * Create new task
 */
export function createNewTodo () {
    return (dispath: Dispatch, getState: GetState, api: Api) => {
        const newTodo = selectNewTodo(getState());

        return api.create(newTodo).then(response => {
            dispath(newTodoActions.createNew());
            dispath(todosActions.add({
                ...newTodo,
                id: response.payload,
            }));
        });
    };
}
