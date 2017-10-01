// @flow

import {render} from "react-dom";
import {Provider} from "react-redux";
import React from "react";
import {App} from "./App";
import {configureStore} from "./configureStore";
import {loadTodos} from "../todoList/todos.thunk";

/**
 * Prepare DOM
 */
function createDOM () {
    const rootNode = document.createElement("div");
    rootNode.setAttribute("id", "root");

    if (document.body !== null) {
        document.body.appendChild(rootNode);
    }

    return rootNode;
}

/**
 * Prepare store and then run application
 */
export function createApp (): void {
    const rootNode = createDOM();

    const store = configureStore();

    store.dispatch(loadTodos());

    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        rootNode
    );
}
