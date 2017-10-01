// @flow

import type {ActionCreator} from "../types/redux";

/**
 * Returned function which creates action creators
 * @param namespace
 * @returns {function(string): function(*): {type: string, payload: *}}
 */
export function createActionCreatorFactory (namespace: string) {
    return <P>(name: string): ActionCreator<P> => (payload: P) => ({
        payload,
        type: `${namespace}/${name}`,
    });
}
