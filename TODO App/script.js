// Get the input field, button, and todo list
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

// Add event listener to the button to add a new todo item
addBtn.addEventListener("click", () => {
  const todoText = input.value.trim();
  if (todoText) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    span.textContent = todoText;
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = "";
  }
});

// Add event listener to the input field to add a new todo item when the user presses Enter
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
