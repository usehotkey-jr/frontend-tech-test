// @flow

import {render} from 'react-dom';
import {Provider} from 'react-redux'
import React from 'react';
import {App} from "./App";
import {configureStore} from "./createStore";

export function createDOM(): void {
    const rootNode = document.createElement('div');
    rootNode.setAttribute('id', 'root');
    document.body.appendChild(rootNode);

    const store = configureStore();

    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        rootNode
    );
}
