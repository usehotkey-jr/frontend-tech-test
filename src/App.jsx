// @flow

import React from 'react';
import {connect} from 'react-redux';
import {AppStyled} from "./App.styled";

export function AppComponent(props) {
    return <AppStyled>{props.app}</AppStyled>;
}

export const App = connect(
    state => state
)(AppComponent);
