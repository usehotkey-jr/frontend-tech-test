// @flow

import React from "react";
import {connect} from "react-redux";
import {AppStyled} from "./App.styled";
import {TodoCreator} from "../TodoCreator/TodoCreator";

/**
 * Root component
 * @param props
 * @returns {XML}
 * @constructor
 */
export function AppComponent (props) {
    return (
        <AppStyled>
            {props.app}
            <TodoCreator />
        </AppStyled>
    );
}

export const App = connect((state) => state)(AppComponent);
