import {createTestSnapshot} from "../../../_helpers/jest/createTestSnapshot.ignore";
import {TodoListComponent} from "../TodoList";

describe("TodoList", () => {
    test("should correctly render", () => {
        createTestSnapshot.all(TodoListComponent, {newTodo: {}});
    });
});
