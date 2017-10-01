// @flow

import type {Store} from "../app/configureStore";

export const selectNewTodo = (store: Store) => store.newTodo;
