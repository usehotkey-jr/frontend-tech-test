// @flow

import type {Api} from "../api/api";
import type {Dispatch} from "../_helpers/redux/createActionCreatorFactory";
import type {GetState} from "../app/configureStore";
import {selectNewTodo} from "./newTodo.selector";
import {newTodoActions} from "./newTodo.duck";

/**
 * Create new task
 */
export function createNewTodo () {
    return (dispath: Dispatch, getState: GetState, api: Api) => {
        const newTodo = selectNewTodo(getState());

        return api.create(newTodo).then((response) => {
            dispath(newTodoActions.add({
                ...newTodo,
                id: response.payload,
            }));
        });
    };
}
