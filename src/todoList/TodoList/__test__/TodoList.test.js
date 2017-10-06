import {createTestSnapshot} from "../../../_helpers/jest/createTestSnapshot.ignore";
import {TodoListComponent} from "../TodoList";
import {todosMock} from "../../__mocks__/todos.mock";

describe("TodoList", () => {
    test("should correctly render", () => {
        const props = {
            todos: todosMock,
            removeTodo: jest.fn(),
            updateTodo: jest.fn(),
        };

        const wrapper = createTestSnapshot.all(TodoListComponent, props);

        // Remove button
        wrapper.find("div").forEach(node => node.simulate("click"));
        expect(props.removeTodo.mock.calls).toHaveLength(2);


        const titleAndDescriptions = wrapper.find("input");

        // Change
        titleAndDescriptions.forEach(node => node.simulate("change"));
        expect(props.updateTodo.mock.calls).toHaveLength(4);

        // Blur
        titleAndDescriptions.forEach(node => node.simulate("blur"));
        expect(props.updateTodo.mock.calls).toHaveLength(8);
    });
});
