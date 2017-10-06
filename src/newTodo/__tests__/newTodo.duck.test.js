import {createTestReducer} from "../../_helpers/jest/createTestReducer.ignore";
import {getNewTodo, newTodoActions, newTodoReducer} from "../newTodo.duck";
import {todoMock} from "../../todoList/__mocks__/todos.mock";

describe("newTodoReducer", () => {
    const testReducer = createTestReducer(newTodoReducer);

    test("unexpected action shouldn't affect original state", () => {
        testReducer.onUnexpected({});
    });

    test("action CREATE_NEW should create new todo", () => {
        testReducer({
            action: newTodoActions.createNew(),
            input: null,
            output: getNewTodo(),
        });
    });

    test("action CHANGE should change todo property", () => {
        testReducer({
            action: newTodoActions.change(["title", 123]),
            input: todoMock,
            output: {
                ...todoMock,
                title: 123,
            },
        });
    });
});
