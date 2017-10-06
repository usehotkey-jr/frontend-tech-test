// @flow

import React from "react";
import "../../node_modules/normalize.css/normalize.css";
import "../theme/shim.css";
import {AppRootContainer} from "./App.styled";
import {TodoCreator} from "../newTodo/TodoCreator/TodoCreator";
import {TodoList} from "../todoList/TodoList/TodoList";

/**
 * Root component
 * @returns {XML}
 * @constructor
 */
export function App () {
    return (
        <AppRootContainer>
            <TodoCreator />
            <TodoList />
        </AppRootContainer>
    );
}
