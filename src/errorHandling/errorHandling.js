// @flow

import {errorHandlingActions} from "./errorHandling.duck";
import type {Response} from "../api/request";
import {getStore} from "../app/store";

/**
 * Handler of api errors.
 */
export function handleApiError (response: any, error: Response<mixed>) {
    getStore().dispatch(errorHandlingActions.handle({
        message: `Request to ${response.url} failed with status: ${response.status}.
        Error message: ${error.message}`,
        id: Math.random(),
    }));
}

window.addEventListener("unhandledrejection", event => {
    event.preventDefault();
    console.warn("Unhandled promise rejection:", event); // eslint-disable-line
});
