// @flow

export type ActionCreator<P> = (payload: P) => Action<P>;

export type Action<P> = {
    type: string;
    payload: P;
}

/**
 * Returned function which creates action creators
 * @param namespace
 * @returns {function(string): function(*): {type: string, payload: *}}
 */
export function createActionCreatorFactory (namespace: string) {
    return <P>(name: string): ActionCreator<P> => (payload: P) => ({
        payload,
        type: `${namespace}/${name}`
    });
}
