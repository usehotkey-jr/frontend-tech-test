// @flow

import type {Todo} from "./newTodo.duck";
import {createSelector} from "reselect";

export const selectNewTodo = createSelector(
    (store) => store.newTodo,
    (newTodo: Todo) => ({newTodo})
);
