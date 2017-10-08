// @flow

import React from "react";
import {connect} from "react-redux";
import type {Todo} from "../newTodo.duck";
import {newTodoActions} from "../newTodo.duck";
import {BlockContainerTC, ContainerTC} from "./TodoCreator.styled";
import {createNewTodo} from "../newTodo.thunk";
import {selectTodoCreatorProps} from "./TodoCreator.selector";
import {Button} from "../../_components/Button.styled";
import {TextArea} from "../../_components/TextArea.styled";
import {Input} from "../../_components/Input.styled";

type TodoCreatorStateProps = {
    newTodo: Todo;
};

type TodoCreatorDispatchProps = {
    change: typeof newTodoActions.change;
    createNewTodo: typeof createNewTodo;
};

type TodoCreatorProps = TodoCreatorStateProps & TodoCreatorDispatchProps;

export class TodoCreatorComponent extends React.PureComponent<TodoCreatorProps> {
    makeOnChange = (key: string) =>
        (event: SyntheticEvent<HTMLInputElement>) =>
            this.props.change([key, event.currentTarget.value]);

    render () {
        const {newTodo} = this.props;
        const isAddDisabled = !newTodo.title || !newTodo.description;

        return (
            <ContainerTC>
                <BlockContainerTC>
                    <Input
                        onChange={this.makeOnChange("title")}
                        value={newTodo.title}
                        placeholder="Title"
                    />
                </BlockContainerTC>
                <BlockContainerTC>
                    <TextArea
                        onChange={this.makeOnChange("description")}
                        value={newTodo.description}
                        placeholder="Description"
                    />
                </BlockContainerTC>
                <Button
                    onClick={this.props.createNewTodo}
                    disabled={isAddDisabled}
                >
                    Add task
                </Button>
            </ContainerTC>
        );
    }
}

export const TodoCreator = connect(
    selectTodoCreatorProps,
    {
        change: newTodoActions.change,
        createNewTodo,
    }
)(TodoCreatorComponent);
