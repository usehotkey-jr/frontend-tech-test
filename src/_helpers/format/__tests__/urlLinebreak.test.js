import {createExpectFunc} from "../../jest/createExpectFunc.ignore";
import {replaceUrlLinebreaks} from "../urlLinebreak";

describe("replaceUrlLinebreaks", () => {
    const expectFunc = createExpectFunc(replaceUrlLinebreaks);

    test("replaceUrlLinebreaks should replace linebreaks to passing to URL", () => {
        expectFunc("asd\r\nasd").toBe("asd%0Aasd");
        expectFunc("asd\nasd").toBe("asd%0Aasd");
    });
});
