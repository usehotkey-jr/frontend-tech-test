// @flow

import type {Action, ActionCreator} from "../_helpers/types/redux";
import type {Todo} from "../newTodo/newTodo.duck";
import {createActionCreatorFactory} from "../_helpers/redux/createActionCreatorFactory";
import {isActionOfType} from "../_helpers/redux/isActionOfType";
import {convertTodoListToMap} from "./todos.selector";

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

    if (isActionOfType(action, load)) {
        return {
            ...state,
            ...convertTodoListToMap(action.payload),
        };
    }

    if (isActionOfType(action, remove)) {
        const newState = {
            ...state,
        };

        delete newState[action.payload];

        return newState;
    }

    return state;
}

const add: ActionCreator<Todo> = actionCreatorFactory("ADD");
const remove: ActionCreator<number> = actionCreatorFactory("REMOVE");
const load: ActionCreator<Array<Todo>> = actionCreatorFactory("LOAD");

export const todosActions = {
    add,
    remove,
    load,
};
