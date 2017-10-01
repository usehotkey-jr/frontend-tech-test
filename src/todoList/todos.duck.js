// @flow

import type {Action, ActionCreator} from "../_helpers/types/redux";
import type {Todo} from "../newTodo/newTodo.duck";
import {createActionCreatorFactory} from "../_helpers/redux/createActionCreatorFactory";
import {isActionOfType} from "../_helpers/redux/isActionOfType";

const actionCreatorFactory = createActionCreatorFactory("TODOS");

export type TodosStore = {
    [id: string | number]: Todo;
}

/**
 * Reducer for todos
 */
export function todosReducer (state: TodosStore = {}, action: Action<any>) {
    if (isActionOfType(action, add)) {
        const todo = action.payload;

        return {
            ...state,
            [todo.id]: todo,
        };
    }

    return state;
}

const add: ActionCreator<Todo> = actionCreatorFactory("ADD");

export const todosActions = {
    add,
};
