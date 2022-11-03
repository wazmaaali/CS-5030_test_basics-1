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

    // Your code here
  }

  delete_todo(id) {
    // Your code here
  }

  update_todo(id, todo) {}
}

module.exports = todoservice;
