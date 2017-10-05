import nock from "nock";
import {todosActions} from "../../todoList/todos.duck";
import {API_MOCK_URL} from "../../app/__mocks__/configureStore.mock";
import {testThunk} from "../../_helpers/jest/testThunk.ignore";
import {loadTodos, removeTodo} from "../todos.thunk";
import {todosMock} from "../__mocks__/todos.mock";

describe("todos thunk", () => {
    afterEach(() => {
        nock.cleanAll();
    });

    test("loadTodos should fetch list of todos", done => {
        nock(API_MOCK_URL)
            .get("/tasks")
            .reply(200, {payload: todosMock});

        testThunk({
            thunk: loadTodos,
            actions: [todosActions.load(todosMock)],
            done,
        });
    });

    test("loadTodos should fetch list of todos", done => {
        nock(API_MOCK_URL)
            .delete("/task/delete/1")
            .reply(200, {payload: 1});

        testThunk({
            thunk: () => removeTodo(1),
            actions: [todosActions.remove(1)],
            done,
        });
    });
});
