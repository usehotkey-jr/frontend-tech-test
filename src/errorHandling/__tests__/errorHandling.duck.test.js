import {createTestReducer} from "../../_helpers/jest/createTestReducer.ignore";
import {errorHandlingActions, errorHandlingReducer} from "../errorHandling.duck";

describe("errorHandlingReducer", () => {
    const testReducer = createTestReducer(errorHandlingReducer);

    test("unexpected action shouldn't affect original state", () => {
        testReducer.onUnexpected({});
    });

    test("action HANDLE_API should create new todo", () => {
        const error = {message: "hi"};

        testReducer({
            action: errorHandlingActions.handleApi(error),
            input: undefined,
            output: {
                stack: [error],
                lastApi: error,
            },
        });
    });
});
