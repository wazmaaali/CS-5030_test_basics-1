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
    console.log("before 999: ", this.todos);

    this.todos.todo.splice(id, 1);
    console.log("999: ", this.todos);
    return this.todos;
  }

  update_todo(id, todo) {}
}

module.exports = todoservice;
