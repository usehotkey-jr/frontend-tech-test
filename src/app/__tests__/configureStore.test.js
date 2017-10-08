import {getStore} from "../store";

describe("store", () => {
    test("all store node should exist", () => {
        const state = getStore().getState();

        expect(["newTodo", "todos", "errorHandling"].every(key => key in state)).toBe(true);
    });
});
