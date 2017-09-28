// @flow

import {Action, ActionCreator} from "./createActionCreatorFactory";

/**
 * Checks is action created by provided action creator
 * @param action
 * @param actionCreator
 * @returns {boolean}
 */
export function isActionOfType<P> (action: Action<any>, actionCreator: ActionCreator<P>): boolean {
    return actionCreator().type === action.type;
}
