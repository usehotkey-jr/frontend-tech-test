import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import {createNewTodo} from "../newTodo.thunk";
import {newTodoActions} from "../newTodo.duck";
import {todosActions} from "../../todoList/todos.duck";
import {Api} from "../../api/api";

const mockStore = configureMockStore([thunk.withExtraArgument(new Api("api"))]);

describe("createNewTodo thunk", () => {
    afterEach(() => {
        nock.cleanAll();
    });

    test("createNewTodo should create new todo", done => {
        nock("api")
            .post("/task/create/title/description")
            .reply(201, {payload: 1});

        const newTodo = {
            title: "title",
            description: "description",
        };

        const store = mockStore({newTodo});
        const expectedActions = [
            newTodoActions.createNew(),
            todosActions.add({
                ...newTodo,
                id: 1,
            }),
        ];

        store.dispatch(createNewTodo()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });
});
