// @flow

import type {Store} from "../app/store";

export const selectNewTodo = (store: Store) => store.newTodo;
