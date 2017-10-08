// @flow

import React from "react";
import {connect} from "react-redux";
import type {Todo} from "../../newTodo/newTodo.duck";
import {BlockTL, TodoItem} from "./TodoList.styled";
import {selectTodosList} from "./TodosList.selector";
import type {TodoTitleOrDescriptionKey, UpdateTodoParams} from "../todos.thunk";
import {removeTodo, updateTodo} from "../todos.thunk";
import {Input} from "../../_components/Input.styled";
import {TextArea} from "../../_components/TextArea.styled";
import {Button} from "../../_components/Button.styled";

type TodoListStateProps = {
    todos: Array<Todo>;
};

type TodoListDispatchProps = {
    removeTodo: (number) => void;
    updateTodo: (UpdateTodoParams) => void;
};

type TodoListProps = TodoListStateProps & TodoListDispatchProps;

export class TodoListComponent extends React.PureComponent<TodoListProps> {
    createRemoveTodo = (id: number) => () => this.props.removeTodo(id);

    createChangeTodo = (id: number, key: TodoTitleOrDescriptionKey, onServer: boolean) =>
        (event: SyntheticEvent<HTMLInputElement>) => {
            this.props.updateTodo([id, key, event.currentTarget.value, onServer]);
        };

    render () {
        const todosHtml = this.props.todos.map(todo => this.renderItem(todo));

        return (
            <div>
                {todosHtml}
            </div>
        );
    }

    renderItem (todo: Todo) {
        return (
            <TodoItem key={todo.id}>
                <BlockTL>
                    <Input
                        value={todo.title}
                        onChange={this.createChangeTodo(todo.id, "title", false)}
                        onBlur={this.createChangeTodo(todo.id, "title", true)}
                    />
                </BlockTL>
                <BlockTL>
                    <TextArea
                        value={todo.description}
                        onChange={this.createChangeTodo(todo.id, "description", false)}
                        onBlur={this.createChangeTodo(todo.id, "description", true)}
                    />
                </BlockTL>
                <BlockTL>
                    <Button onClick={this.createRemoveTodo(todo.id)} danger>Remove item</Button>
                </BlockTL>
            </TodoItem>
        );
    }
}

export const TodoList = connect(
    selectTodosList,
    {
        removeTodo,
        updateTodo,
    }
)(TodoListComponent);
