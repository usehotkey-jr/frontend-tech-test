import {Api} from "../api";

describe("Api", () => {
    test("method getUrl should create correct urls", () => {
        const api = new Api("url");

        expect(api.getUrl(["first", "bre\nak"])).toBe("url/first/bre%0Aak");
    });
});
