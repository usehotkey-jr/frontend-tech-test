import nock from "nock";
import {API_MOCK_URL} from "../../app/__mocks__/configureStore.mock";
import {Api} from "../../api/api";
import {handleApiError} from "../errorHandling";

jest.mock("../errorHandling", () => ({
    handleApiError: jest.fn(),
}));


describe("errorHandling", () => {
    afterEach(() => {
        nock.cleanAll();
    });

    test("asd", () => {
        nock(API_MOCK_URL)
            .get("/tasks")
            .reply(400, {message: "error"});

        const api = new Api(API_MOCK_URL);

        expect.assertions(1);

        return api.getTasks().catch(() => {
            expect(handleApiError.mock.calls).toHaveLength(1);
        });
    });
});
