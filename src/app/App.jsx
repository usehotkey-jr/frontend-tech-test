import React from "react";
import "../../node_modules/normalize.css/normalize.css";
import "../theme/shim.css";
import {AppHeader, AppRootContainer} from "./App.styled";
import {TodoCreator} from "../newTodo/TodoCreator/TodoCreator";
import {TodoList} from "../todoList/TodoList/TodoList";

/**
 * Root component
 */
export function App () {
    return (
        <AppRootContainer>
            <AppHeader>Todo List</AppHeader>
            <TodoCreator />
            <TodoList />
        </AppRootContainer>
    );
}
