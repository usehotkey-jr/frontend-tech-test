import {isNullOrUndefined} from "../isNullOrUndefined";
import {createExpectFunc} from "../jest/createExpectFunc";

describe("isNullOrUndefined", () => {
    const expectFunc = createExpectFunc(isNullOrUndefined);

    test("isNullOrUndefined should return true when passed null or undefined", () => {
        expectFunc(null).toBe(true);
        expectFunc(undefined).toBe(true);
    });

    test("isNullOrUndefined should return false when passed other values", () => {
        expectFunc(0).toBe(false);
        expectFunc(NaN).toBe(false);
        expectFunc("").toBe(false);
        expectFunc({}).toBe(false);
        expectFunc([]).toBe(false);
    });
});
