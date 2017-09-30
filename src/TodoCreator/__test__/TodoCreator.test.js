import {createTestSnapshot} from "../../_helpers/jest/createTestSnapshot.ignore";
import {TodoCreatorComponent} from "../TodoCreator";

describe("TodoCreator", () => {
    test("should correctly render", () => {
        createTestSnapshot.all(TodoCreatorComponent, {newTodo: {}});
    });
});
