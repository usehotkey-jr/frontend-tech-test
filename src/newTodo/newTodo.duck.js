// @flow

import type {Action, ActionCreator} from "../_helpers/types/redux";
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
    if (isActionOfType(action, createNew)) {
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

const createNew: ActionCreator<void> = actionCreatorFactory("CREATE_NEW");
const change: ActionCreator<[string, string]> = actionCreatorFactory("CHANGE");

export const newTodoActions = {
    change,
    createNew,
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
