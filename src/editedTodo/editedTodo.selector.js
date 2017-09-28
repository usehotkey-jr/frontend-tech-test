// @flow

import {Todo} from "./editedTodo.duck";
import {createSelector} from "reselect";

export const selectEditedTodo = createSelector(
    (store) => store.editedTodo,
    (editedTodo: Todo) => ({editedTodo})
);
