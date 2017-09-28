// @flow

import {combineReducers, createStore} from 'redux';

export function configureStore() {
    const rootReducer = combineReducers({
        app: (state = 'Hello, World!') => state
    });

    return createStore(rootReducer);
}
