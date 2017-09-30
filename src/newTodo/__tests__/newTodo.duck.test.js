import {stub} from "sinon";
import {createTestReducer} from "../../_helpers/jest/createTestReducer.ignore";
import {createNewTodo, newTodoActions, newTodoReducer} from "../newTodo.duck";

describe("newTodoReducer", () => {
    const testReducer = createTestReducer(newTodoReducer);

    beforeAll(() => {
        stub(Math, "random").returns(0.5);
    });

    test("unexpected action shouldn't affect original state", () => {
        testReducer.onUnexpected({});
    });

    test("action ADD should create new todo", () => {
        testReducer({
            action: newTodoActions.add(),
            input: null,
            output: createNewTodo()
        });
    });
});
