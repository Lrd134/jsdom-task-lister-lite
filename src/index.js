
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const textArea = document.getElementById("new-task-description");
  const todoList = document.getElementById("list");

  form.addEventListener("submit", function() {

    if (textArea.value === "") {

      alert("Task cannot be blank.");

    } else {
      const li = document.createElement("li");  
      const btn = document.createElement("button");
      btn.innerText = 'x';
      btn.style.float = 'right';
      btn.className = "remove-list-item";
      li.innerText = textArea.value;
      todoList.appendChild(li);
      li.appendChild(btn); 
      textArea.value = "";
      addButtonListeners(btn);
      event.preventDefault();
    }
  });

  
});
function addButtonListeners(button){
  button.addEventListener("click", function(){
    button.parentElement.remove();
  })
}
