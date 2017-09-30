// @flow

import {
    Action,
    ActionCreator,
    createActionCreatorFactory
} from "../_helpers/redux/createActionCreatorFactory";
import {isActionOfType} from "../_helpers/redux/isActionOfType";

const actionCreatorFactory = createActionCreatorFactory("NEW_TODO");

export type Todo = {
    id?: number;
    title: string;
    description: string;
    temporaryId: number;
}

/**
 * Reducer for newTodo
 */
export function newTodoReducer (state: Todo = createNewTodo(), action: Action<any>) {
    if (isActionOfType(action, add)) {
        return createNewTodo();
    }

    if (isActionOfType(action, change)) {
        const [key, value] = action.payload;

        return {
            ...state,
            [key]: value
        };
    }

    return state;
}

const add: ActionCreator<void> = actionCreatorFactory("ADD");
const change: ActionCreator<[string, string]> = actionCreatorFactory("CHANGE");

export const todoActions = {
    add,
    change
};

/**
 * Create empty todoItem
 * @returns {{description: string, temporaryId: number, title: string}}
 */
function createNewTodo (): Todo {
    return {
        description: "",
        temporaryId: Math.random(),
        title: ""
    };
}
