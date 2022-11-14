var todoservice = require("./todo.service.js");
describe("todo test suite", () => {
  test("truth_value", () => {
    expect(true).toBe(true);
  });

  let todo_service = new todoservice();
  var t = {
    title: "T4",
    description: "D4",
    done: false,
  };
  var id = 1;

  var _id = 2;

  var t_ = {
    title: "T3",
    description: "D3",
    done: true,
  };

  test("if service instance is created", () => {
    expect(todo_service instanceof todoservice).toBe(true);
  });

  // Initial length of the todo list is 3 // 3 default tasks
  test("get_todos", () => {
    expect(todo_service.get_todos().todo.length).toEqual(3);
  });

  test("add_todo", () => {
    expect(todo_service.add_todo(t).todo.length).toEqual(4);
  });
  test("delete_todo", () => {
    expect(todo_service.delete_todo(id).todo.length).toEqual(3);
  });
  test("update_todo", () => {
    expect(todo_service.update_todo(_id, t_).todo[2]).toEqual(t_);
  });
});
