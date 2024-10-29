let idCount = 1;

function addTodo() {
    const input = document.getElementById("todo-input");
    const todoText = input.value.trim();

    // Check if input is empty
    if (todoText === "") {
        alert("Please enter a to-do item.");
        return;
    }

    const todosContainer = document.getElementById("todos");

    // Create a new to-do item
    const todoItem = document.createElement("div");
    todoItem.setAttribute("id", `todo-${idCount}`);
    todoItem.setAttribute("class", "todo-item");

    todoItem.innerHTML = `
        <p class="todo-text">${todoText}</p>
        <button onclick="deleteTodo(${idCount})" class="delete-btn">Delete</button>
        <button onclick="updateTodo(${idCount})" class="update-btn">Update</button>
    `;

    // Add the new to-do item to the list
    todosContainer.appendChild(todoItem);

    // Clear the input field and increase idCount
    input.value = "";
    idCount++;
}

function deleteTodo(id) {
    // Find and remove the to-do item
    const todoItem = document.getElementById(`todo-${id}`);
    if (todoItem) {
        todoItem.remove();
    }
}

function updateTodo(id) {
    const todoItem = document.getElementById(`todo-${id}`);
    const todoTextElement = todoItem.querySelector(".todo-text");
    const input = document.getElementById("todo-input");

    // Update the todo text with the input field's value
    const newText = input.value.trim();

    if (newText === "") {
        alert("Please enter a valid to-do item.");
        return;
    }

    // Set the new text and clear the input
    todoTextElement.textContent = newText;
    input.value = ""; // Clear the input field after updating
}
