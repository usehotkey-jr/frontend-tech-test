import {createTestSnapshot} from "../../_helpers/jest/createTestSnapshot.ignore";
import {App} from "../App";

describe("App", () => {
    test("should correctly render", () => {
        createTestSnapshot.shallow(App);
    });
});
