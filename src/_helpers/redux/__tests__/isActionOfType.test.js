import {createActionCreatorFactory} from "../createActionCreatorFactory";
import {isActionOfType} from "../isActionOfType";

describe("isActionOfType", () => {
    test("should return true when action produced by given action creator", () => {
        const actionCreator = createActionCreatorFactory("NAMESPACE")("NAME");

        const rightAction = actionCreator();
        const wrongAction = {};

        expect(isActionOfType(rightAction, actionCreator)).toBe(true);
        expect(isActionOfType(wrongAction, actionCreator)).toBe(false);
    });
});
