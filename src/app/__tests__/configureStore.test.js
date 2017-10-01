import {configureStore} from "../configureStore";

describe("configureStore", () => {
    test("all store node should exist", () => {
        const store = configureStore();
        const state = store.getState();

        expect(["newTodo"].every(key => key in state)).toBe(true);
    });
});
