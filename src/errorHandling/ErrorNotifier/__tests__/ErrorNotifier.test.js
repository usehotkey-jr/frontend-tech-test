import {createTestSnapshot} from "../../../_helpers/jest/createTestSnapshot.ignore";
import {ErrorNotifierComponent} from "../ErrorNotifier";
import {errorsMock} from "../../__mocks__/errorHandling.mock";

describe("ErrorNotifier", () => {
    test("should correctly render", () => {
        const props = {
            errors: errorsMock,
        };
        createTestSnapshot.all(ErrorNotifierComponent, props);
    });
});
