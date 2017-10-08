// @flow

import {createSelector} from "reselect";

export const selectErrorNotifierProps = createSelector(
    state => state.errorHandling,
    errorHandling => ({errors: errorHandling.all})
);
