import nock from "nock";
import {todosActions} from "../../todoList/todos.duck";
import {API_MOCK_URL} from "../../app/__mocks__/configureStore.mock";
import {testThunk} from "../../_helpers/jest/testThunk.ignore";
import {loadTodos, removeTodo, updateTodo} from "../todos.thunk";
import {todoMock, todosMock} from "../__mocks__/todos.mock";

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

    test("removeTodo should remove task by id", done => {
        nock(API_MOCK_URL)
            .delete("/task/delete/1")
            .reply(200, {payload: 1});

        testThunk({
            thunk: () => removeTodo(1),
            actions: [todosActions.remove(1)],
            done,
        });
    });

    test("updateTodo should update task", done => {
        nock(API_MOCK_URL)
            .put("/task/update/0/Hi/Guys")
            .reply(200, {payload: todoMock});

        testThunk({
            state: {
                todos: {
                    0: {
                        ...todoMock,
                        title: "Previous",
                    },
                },
            },
            thunk: () => updateTodo([0, "title", "Hi"]),
            actions: [
                todosActions.update({
                    ...todoMock,
                    title: "Hi",
                }),
            ],
            done,
        });
    });
});
