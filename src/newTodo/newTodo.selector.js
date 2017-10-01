// @flow

import type {Todo} from "./newTodo.duck";
import type {Store} from "../app/configureStore";
import {createSelector} from "reselect";

export const selectNewTodo = createSelector(
    (store: Store) => store.newTodo,
    (newTodo: Todo) => newTodo
);
