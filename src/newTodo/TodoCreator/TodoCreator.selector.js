// @flow

import {selectNewTodo} from "../newTodo.selector";
import {createSelector} from "reselect";

export const selectTodoCreatorProps = createSelector(
    selectNewTodo,
    (newTodo) => ({newTodo})
);
