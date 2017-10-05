import {createTestReducer} from "../../_helpers/jest/createTestReducer.ignore";
import {todosActions, todosReducer} from "../todos.duck";
import {todoMock, todosMock} from "../__mocks__/todos.mock";
import {convertTodoListToMap} from "../todos.selector";

describe("newTodoReducer", () => {
    const testReducer = createTestReducer(todosReducer);

    test("unexpected action shouldn't affect original state", () => {
        testReducer.onUnexpected({});
    });

    test("action UPDATE should create add/replace todo by id", () => {
        testReducer({
            action: todosActions.update(todoMock),
            input: {},
            output: {
                [todoMock.id]: todoMock,
            },
        });
    });

    test("action LOAD should put all todos to store", () => {
        testReducer({
            action: todosActions.load(todosMock),
            input: {},
            output: convertTodoListToMap(todosMock),
        });
    });

    test("action REMOVE should delete todo from map by id", () => {
        testReducer({
            action: todosActions.remove(1),
            input: convertTodoListToMap(todosMock),
            output: {
                [todoMock.id]: todoMock,
            },
        });
    });
});
