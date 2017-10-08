// @flow

import type {Action, ActionCreator} from "../_helpers/types/redux";
import {createActionCreatorFactory} from "../_helpers/redux/createActionCreatorFactory";
import {isActionOfType} from "../_helpers/redux/isActionOfType";
import type {Response} from "../api/request";

const actionCreatorFactory = createActionCreatorFactory("ERROR_HANDLING");

export type ErrorHandling = {
    stack: mixed[];
    lastApi?: Response<mixed>;
};

const errorHandlingInitialState = {
    stack: [],
    lastApi: undefined,
};


/**
 * Reducer for errorHandling
 */
export function errorHandlingReducer (state: ErrorHandling = errorHandlingInitialState, action: Action<any>) {
    if (isActionOfType(action, handleApi)) {
        const error = action.payload;

        return {
            stack: [...state.stack.slice(0, 9), error],
            lastApi: error,
        };
    }

    return state;
}

const handleApi: ActionCreator<Response<mixed>> = actionCreatorFactory("HANDLE_API");

export const errorHandlingActions = {
    handleApi,
};
