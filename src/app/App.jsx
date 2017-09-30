// @flow

import React from "react";
import {connect} from "react-redux";
import {AppRootContainer} from "./App.styled";
import {TodoCreator} from "../TodoCreator/TodoCreator";

/**
 * Root component
 * @returns {XML}
 * @constructor
 */
export function App () {
    return (
        <AppRootContainer>
            <TodoCreator />
        </AppRootContainer>
    );
}
