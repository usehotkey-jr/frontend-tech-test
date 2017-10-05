import nock from "nock";
import {createNewTodo} from "../newTodo.thunk";
import {newTodoActions} from "../newTodo.duck";
import {todosActions} from "../../todoList/todos.duck";
import {API_MOCK_URL} from "../../app/__mocks__/configureStore.mock";
import {testThunk} from "../../_helpers/jest/testThunk.ignore";

describe("createNewTodo thunk", () => {
    afterEach(() => {
        nock.cleanAll();
    });

    test("createNewTodo should create new todo", done => {
        nock(API_MOCK_URL)
            .post("/task/create/title/description")
            .reply(201, {payload: 1});

        const newTodo = {
            title: "title",
            description: "description",
        };

        testThunk({
            state: {newTodo},
            thunk: createNewTodo,
            actions: [
                newTodoActions.createNew(),
                todosActions.update({
                    ...newTodo,
                    id: 1,
                }),
            ],
            done,
        });
    });
});
