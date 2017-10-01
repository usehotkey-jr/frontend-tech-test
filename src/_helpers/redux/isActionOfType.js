// @flow

import type {Action, ActionCreator} from "../types/redux";

/**
 * Checks is action created by provided action creator
 * @param action
 * @param actionCreator
 * @returns {boolean}
 */
export function isActionOfType<P> (action: Action<mixed>, actionCreator: ActionCreator<P>): boolean {
    return actionCreator((undefined: any)).type === action.type;
}
