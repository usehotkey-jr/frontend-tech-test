import {createTestSnapshot} from "../../_helpers/jest/createTestSnapshot.ignore";
import {Button} from "../Button.styled";

describe("Button", () => {
    test("should correctly render", () => {
        createTestSnapshot.shallow(Button);
    });
});
