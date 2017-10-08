// @flow

import {errorHandlingActions} from "./errorHandling.duck";
import type {Response} from "../api/request";
import {getStore} from "../app/store";

/**
 * Handler of api errors.
 */
export function handleApiError (error: Response<mixed>) {
    getStore().dispatch(errorHandlingActions.handleApi(error));
}

window.addEventListener("unhandledrejection", event => {
    event.preventDefault();
    console.warn("Unhandled promise rejection:", event); // eslint-disable-line
});
