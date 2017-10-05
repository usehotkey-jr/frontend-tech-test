// @flow

import type {Action} from "../types/redux";
import {mockStore} from "../../app/__mocks__/configureStore.mock";

export type TestThunkParams<S> = {
    state: S,
    actions: Action<mixed>,
    thunk: Function,
    done: () => void,
};

/**
 * Test utility to test thunks
 * @param params
 */
export function testThunk<S> (params: TestThunkParams<S>) {
    const {state, actions, thunk, done} = params;

    const store = mockStore(state);

    store.dispatch(thunk()).then(() => {
        expect(store.getActions()).toEqual(actions);
        done();
    });
}
