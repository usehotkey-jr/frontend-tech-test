// @flow

import React from "react";
import {connect} from "react-redux";
import {Todo, todoActions} from "../editedTodo/editedTodo.duck";
import {selectEditedTodo} from "../editedTodo/editedTodo.selector";
import {Input} from "./TodoCreator.styled";

type TodoCreatorStateProps = {
    editedTodo: Todo;
};

type TodoCreatorProps = typeof todoActions & TodoCreatorStateProps;

export class TodoCreatorComponent extends React.PureComponent<TodoCreatorProps> {
    constructor () {
        super();

        this.onChange = this.onChange.bind(this);
    }

    onChange (event: SyntheticEvent<HTMLInputElement>) {
        if (this.props.changeTitle) {
            this.props.changeTitle(event.target.value);
        }
    }

    render () {
        return <Input onChange={this.onChange} value={this.props.editedTodo.title} />;
    }
}

export const TodoCreator = connect(
    selectEditedTodo,
    todoActions
)(TodoCreatorComponent);
