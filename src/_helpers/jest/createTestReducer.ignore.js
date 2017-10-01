// @flow

import type {Reducer} from "../types/redux";

export type TestReducerParams<S> = {
    action: Action<mixed>,
    input: S,
    output: S
};

/**
 * Test reducer on common actions and on unexpected actions
 * @param reducer
 * @returns {function(TestReducerParams.<S>)}
 */
export function createTestReducer<S> (reducer: Reducer<S>) {
    const testReducerCreator = (params: TestReducerParams<S>) => {
        expect(reducer(params.input, params.action)).toEqual(params.output);
    };

    testReducerCreator.onUnexpected = (state: S) => {
        expect(reducer(state, {type: "@@TEST/UNEXPECTED"})).toBe(state);
    };

    return testReducerCreator;
}
