// @flow

import type {Action, ActionCreator} from "../_helpers/redux/createActionCreatorFactory";
import {createActionCreatorFactory} from "../_helpers/redux/createActionCreatorFactory";
import {isActionOfType} from "../_helpers/redux/isActionOfType";

const actionCreatorFactory = createActionCreatorFactory("NEW_TODO");

export type Todo = {
    id?: number;
    title: string;
    description: string;
}

/**
 * Reducer for newTodo
 */
export function newTodoReducer (state: Todo = getNewTodo(), action: Action<any>) {
    if (isActionOfType(action, add)) {
        return getNewTodo();
    }

    if (isActionOfType(action, change)) {
        const [key, value] = action.payload;

        return {
            ...state,
            [key]: value,
        };
    }

    return state;
}

const add: ActionCreator<void> = actionCreatorFactory("ADD");
const change: ActionCreator<[string, string]> = actionCreatorFactory("CHANGE");

export const newTodoActions = {
    add,
    change,
};

/**
 * Create empty todoItem
 * @returns {{description: string, temporaryId: number, title: string}}
 */
export function getNewTodo (): Todo {
    return {
        description: "",
        title: "",
    };
}
