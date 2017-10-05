import {createTestSnapshot} from "../../../_helpers/jest/createTestSnapshot.ignore";
import {TodoListComponent} from "../TodoList";
import {todos} from "../todos.mock";

describe("TodoList", () => {
    test("should correctly render", () => {
        const props = {
            todos,
        };

        createTestSnapshot.all(TodoListComponent, props);
    });
});
