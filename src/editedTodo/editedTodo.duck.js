// @flow

import {
    Action,
    ActionCreator,
    createActionCreatorFactory
} from "../_helpers/redux/createActionCreatorFactory";
import {isActionOfType} from "../_helpers/redux/isActionOfType";

const actionCreatorFactory = createActionCreatorFactory("TODO");

export type Todo = {
    id?: number;
    title: string;
    description: string;
    temporaryId: number;
}

/**
 * Reducer for editedTodo
 */
export function editedTodoReducer (state: Todo = createNewTodo(), action: Action<any>) {
    if (isActionOfType(action, create)) {
        return createNewTodo();
    }

    if (isActionOfType(action, changeTitle)) {
        return {
            ...state,
            title: action.payload
        };
    }

    if (isActionOfType(action, changeDescription)) {
        return {
            ...state,
            description: action.payload
        };
    }

    return state;
}

const create: ActionCreator<void> = actionCreatorFactory("CREATE");
const changeTitle: ActionCreator<string> = actionCreatorFactory("CHANGE_TITLE");
const changeDescription: ActionCreator<string> = actionCreatorFactory("CHANGE_TITLE");

export const todoActions = {
    changeDescription,
    changeTitle,
    create
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


