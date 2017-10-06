import {createApp} from "../createApp";

describe("createApp", () => {
    test("should works", () => {
        expect(() => createApp()).not.toThrow();
    });
});
