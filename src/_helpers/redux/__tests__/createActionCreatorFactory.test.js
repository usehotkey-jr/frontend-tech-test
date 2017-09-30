import {createActionCreatorFactory} from "../createActionCreatorFactory";

describe("createActionCreatorFactory", () => {
    test("should creates creators which producing actions given namespace/name and payload", () => {
        const factory = createActionCreatorFactory("NAMESPACE");
        const creator = factory("NAME");
        const payload = {};
        const action = creator(payload);

        expect(action.type).toBe("NAMESPACE/NAME");
        expect(action.payload).toEqual(payload);
    });
});
