// @flow

import type {Todo} from "../../newTodo/newTodo.duck";

export const todoMock = {
    id: 0,
    title: "Hi",
    description: "Guys",
};

export const todosMock: Array<Todo> = [
    todoMock,
    {
        id: 1,
        title: "Another",
        description: "Item",
    },
];
