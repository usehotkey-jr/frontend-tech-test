import {createTestSnapshot} from "../../../_helpers/jest/createTestSnapshot.ignore";
import {TodoListComponent} from "../TodoList";
import {todosMock} from "../../__mocks__/todos.mock";

describe("TodoList", () => {
    test("should correctly render", () => {
        const props = {
            todos: todosMock,
        };

        createTestSnapshot.all(TodoListComponent, props);
    });
});
