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
    return (dispatch: Dispatch, getState: GetState, api: Api) => {
        const newTodo = selectNewTodo(getState());

        return api.create(newTodo).then(response => {
            dispatch(newTodoActions.createNew());
            dispatch(todosActions.update({
                ...newTodo,
                id: response.payload,
            }));
        });
    };
}
