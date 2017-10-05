import {createTestReducer} from "../../_helpers/jest/createTestReducer.ignore";
import {todosActions, todosReducer} from "../todos.duck";
import {todoMock, todosMock} from "../__mocks__/todos.mock";

describe("newTodoReducer", () => {
    const testReducer = createTestReducer(todosReducer);

    test("unexpected action shouldn't affect original state", () => {
        testReducer.onUnexpected({});
    });

    test("action ADD should create add/replace todo by id", () => {
        testReducer({
            action: todosActions.add(todoMock),
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
            output: {
                [todosMock[0].id]: todosMock[0],
                [todosMock[1].id]: todosMock[1],
            },
        });
    });
});
