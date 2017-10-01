import {createTestReducer} from "../../_helpers/jest/createTestReducer.ignore";
import {getNewTodo, newTodoActions, newTodoReducer} from "../newTodo.duck";

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
});
