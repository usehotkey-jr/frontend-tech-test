import {createTestSnapshot} from "../../../_helpers/jest/createTestSnapshot.ignore";
import {TodoCreatorComponent} from "../TodoCreator";
import {todoMock} from "../../../todoList/__mocks__/todos.mock";

describe("TodoCreator", () => {
    test("should correctly render", () => {
        const props = {
            newTodo: todoMock,
            change: jest.fn(),
            createNewTodo: jest.fn(),
        };
        const wrapper = createTestSnapshot.all(TodoCreatorComponent, props);

        // Title
        const titleInput = wrapper.find("input");
        expect(titleInput.props().value).toBe(todoMock.title);

        titleInput.simulate("change");
        expect(props.change.mock.calls).toHaveLength(1);

        // Description
        const descriptionTextarea = wrapper.find("textarea");
        expect(descriptionTextarea.props().value).toBe(todoMock.description);

        descriptionTextarea.simulate("change");
        expect(props.change.mock.calls).toHaveLength(2);

        // Add button
        wrapper.find("button").simulate("click");
        expect(props.createNewTodo.mock.calls).toHaveLength(1);
    });
});
