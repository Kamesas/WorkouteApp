import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, addTodo, deleteTodo, completeTodo, removeAll } from "../../store/actions/actionsTodos";
import { ITodoItem } from "../../store/actions/typesTodos";

interface IProps {
  todos: ITodoItem[];
  fetchTodos: Function;
  addTodoRequest: Function;
  deleteTodo: Function;
  completeTodo: Function;
  removeAll: Function;
}

class TodoList extends Component<any> {
  state = {
    todoTitle: ""
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  delTodo = (id: any) => {
    this.props.deleteTodo(id);
  };

  onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    if (this.state.todoTitle.trim() === "") return;

    this.props.addTodoRequest({
      id: new Date().getTime(),
      title: this.state.todoTitle,
      isDone: false
    });

    this.setState({ todoTitle: "" });
  };

  completeTodo = (id: any) => {
    this.props.completeTodo(id);
  };

  removeAll = () => {
    this.props.removeAll();
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="todoTitle"
            placeholder="Add a todo"
            value={this.state.todoTitle}
            onChange={this.onChange}
          />
          <button type="submit">Add</button>
        </form>

        {this.props.todos &&
          this.props.todos.map((todo: any) => {
            return (
              <div key={todo.id}>
                {todo.title}
                <button onClick={() => this.delTodo(todo.id)}>Del todo</button>
                <button onClick={() => this.completeTodo(todo.id)}>Done</button>
                <button onClick={this.removeAll}>Remove all</button>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: { todos: ITodoItem[] }) => {
  return {
    todos: todos
  };
};

const mapDispatchToProps = (dispatch: Function) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  addTodoRequest: (newTodo: any) => dispatch(addTodo(newTodo)),
  deleteTodo: (id: any) => dispatch(deleteTodo(id)),
  completeTodo: (id: any) => dispatch(completeTodo(id)),
  removeAll: () => dispatch(removeAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
