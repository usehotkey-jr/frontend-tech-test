// @flow

import ReactDOM from 'react-dom';
import React from 'react';
import {App} from "./App";

export function createDOM(): void {
    const rootNode = document.createElement('div');
    rootNode.setAttribute('id', 'root');
    document.body.appendChild(rootNode);

    ReactDOM.render(<App/>, rootNode);
}
