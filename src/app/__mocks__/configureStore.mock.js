// @flow

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {Api} from "../../api/api";

export const API_MOCK_URL = "http://localhost:9000/api";

/**
 * Create configured mock for store
 */
export function mockStore (state: mixed) {
    return configureMockStore([thunk.withExtraArgument(new Api(API_MOCK_URL))])(state);
}
