import {add} from "../index";

describe("add", () => {
    test("add should works correct", () => {
        expect(add(2, 3)).toBe(5);
    });
});
