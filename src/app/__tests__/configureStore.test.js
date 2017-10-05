import {configureStore} from "../configureStore";

describe("configureStore", () => {
    test("all store node should exist", () => {
        const state = configureStore().getState();

        expect(["newTodo"].every(key => key in state)).toBe(true);
    });
});
