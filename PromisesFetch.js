document.addEventListener("DOMContentLoaded", function() {

    var usersDiv = document.getElementById("users");
    var todosDiv = document.getElementById("todos");

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(users) {
        for (var i = 0; i < users.length; i++) {
            var userDiv = document.createElement("div");
            userDiv.className = "user";
            userDiv.textContent = users[i].name;
            userDiv.setAttribute("data-id", users[i].id);
            usersDiv.appendChild(userDiv);
        }
    });

    usersDiv.addEventListener("click", function(e) {
        if (e.target.className === "user") {
            var userId = e.target.getAttribute("data-id");
            todosDiv.textContent = "Завантаження...";

            fetch("https://jsonplaceholder.typicode.com/todos?userId=" + userId)
            .then(function(response) {
                return response.json();
            })
            .then(function(todos) {
                todosDiv.innerHTML = "";
                for (var i = 0; i < todos.length; i++) {
                    var todoDiv = document.createElement("div");
                    todoDiv.className = "todo";
                    todoDiv.textContent = todos[i].title;
                    todosDiv.appendChild(todoDiv);
                }
            });
        }
    });

});