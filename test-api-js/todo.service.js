class todoservice {
  todo_data = {
    todo: [
      {
        title: "T1",
        description: "D1",
        done: false,
      },
      {
        title: "T2",
        description: "D1",
        done: false,
      },
      {
        title: "T3",
        description: "D1",
        done: false,
      },
    ],
  };

  constructor() {
    this.todos = this.todo_data;
  }

  get_todos() {
    return this.todos;
  }

  add_todo(todo) {
    this.todos.todo.push(todo);
    return this.todos;
  }

  delete_todo(id) {
    delete this.todos.todo[id];
    this.todos.todo.splice(id, 1);
    return this.todos;
  }

  update_todo(id, todo) {
    this.todos.todo[id] = todo;
    return this.todos;
  }
}

module.exports = todoservice;
