// @flow

import React from "react";
import {connect} from "react-redux";
import {ContainerEN, NotificationItem} from "./ErrorNotifier.styled";
import {selectErrorNotifierProps} from "./ErrorNotifier.selector";
import type {Notification} from "../errorHandling.duck";
import {errorHandlingActions} from "../errorHandling.duck";

type ErrorNotifierStateProps = {
    errors: Notification[];
};

type ErrorNotifierDispatchProps = {
    clear: typeof errorHandlingActions.clear;
};

type ErrorNotifierProps = ErrorNotifierStateProps & ErrorNotifierDispatchProps;

const NOTIFICATION_LIVE_TIME = 5000;

export class ErrorNotifierComponent extends React.PureComponent<ErrorNotifierProps> {
    componentWillReceiveProps (nextProps: ErrorNotifierStateProps) {
        nextProps.errors.forEach(nextError => {
            if (this.props.errors.indexOf(nextError) === -1) {
                setTimeout(() => this.props.clear(nextError), NOTIFICATION_LIVE_TIME);
            }
        });
    }

    render () {
        const errorHtml = this.props.errors
            .map(error => (<NotificationItem key={error.id}>{error.message}</NotificationItem>));

        return (
            <ContainerEN>
                {errorHtml}
            </ContainerEN>
        );
    }
}

export const ErrorNotifier = connect(selectErrorNotifierProps, {
    clear: errorHandlingActions.clear,
})(ErrorNotifierComponent);
