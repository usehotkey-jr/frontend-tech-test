// @flow

import type {Action, ActionCreator} from "../_helpers/types/redux";
import {createActionCreatorFactory} from "../_helpers/redux/createActionCreatorFactory";
import {isActionOfType} from "../_helpers/redux/isActionOfType";

const actionCreatorFactory = createActionCreatorFactory("ERROR_HANDLING");

export type ErrorHandling = {
    all: Notification[];
};

export type Notification = {
    id: number;
    message: string;
}

const errorHandlingInitialState = {
    all: [],
};


/**
 * Reducer for errorHandling
 */
export function errorHandlingReducer (state: ErrorHandling = errorHandlingInitialState, action: Action<any>) {
    if (isActionOfType(action, handle)) {
        const error = action.payload;

        return {
            all: [...state.all, error],
        };
    }

    if (isActionOfType(action, clear)) {
        const nextAll = state.all.filter(error => error.id !== action.payload.id);

        return {
            all: nextAll,
        };
    }

    return state;
}

const handle: ActionCreator<Notification> = actionCreatorFactory("HANDLE");
const clear: ActionCreator<Notification> = actionCreatorFactory("CLEAR");

export const errorHandlingActions = {
    handle,
    clear,
};
