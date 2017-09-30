// @flow

import React from "react";
import {connect} from "react-redux";
import {Todo, todoActions} from "../newTodo/newTodo.duck";
import {selectNewTodo} from "../newTodo/newTodo.selector";
import {Button, Input} from "./TodoCreator.styled";
import {isNullOrUndefined} from "../_helpers/isNullOrUndefined";

type TodoCreatorStateProps = {
    editedTodo: Todo;
};

type TodoCreatorProps = typeof todoActions & TodoCreatorStateProps;

export class TodoCreatorComponent extends React.PureComponent<TodoCreatorProps> {
    constructor () {
        super();
        this.makeOnChange = (key: string) => (event: SyntheticEvent<HTMLInputElement>) => {
            if (this.props.change) {
                this.props.change([key, event.target.value]);
            }
        };
    }

    render () {
        const {newTodo} = this.props;

        return (
            <div>
                <Input onChange={this.makeOnChange("title")} value={newTodo.title} />
                <Input onChange={this.makeOnChange("description")} value={newTodo.description} />
                <Button onClick={this.props.add}>Add TODO</Button>
            </div>
        );
    }
}

export const TodoCreator = connect(
    selectNewTodo,
    todoActions
)(TodoCreatorComponent);
