import {createTestReducer} from "../../_helpers/jest/createTestReducer.ignore";
import {errorHandlingActions, errorHandlingReducer} from "../errorHandling.duck";
import {errorsMock} from "../__mocks__/errorHandling.mock";

describe("errorHandlingReducer", () => {
    const testReducer = createTestReducer(errorHandlingReducer);

    test("unexpected action shouldn't affect original state", () => {
        testReducer.onUnexpected({});
    });

    test("action HANDLE should create new todo", () => {
        testReducer({
            action: errorHandlingActions.handle(errorsMock[1]),
            input: {
                all: [errorsMock[0]],
            },
            output: {
                all: errorsMock,
            },
        });
    });

    test("action CLEAR delete error from stack", () => {
        testReducer({
            action: errorHandlingActions.clear(errorsMock[1]),
            input: {
                all: errorsMock,
            },
            output: {
                all: [errorsMock[0]],
            },
        });
    });
});
