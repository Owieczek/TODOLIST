const form = document.querySelector("#newTaskForm");
const placeholder = document.querySelector(".placeholder");
const input1 = document.querySelector("#input1");
const list = document.querySelector("#list");
const button = document.querySelector("#add-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input1.value;
  input1.value = '';
  /*  if (!task) {
    alert("ps");
    return;
  } */
  /*   const ul = document.createElement('ul')
  ul.classList.add('list') */
  const li = document.createElement("li"); //robi -<li></li>
  const div = document.createElement("div");
  div.classList.add("taskName");
  const input = document.createElement("input");
  input.classList.add("input");
  input.setAttribute("readonly", true);
  input.value = task;
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerHTML = "EDIT";
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = "DELETE";
  div.appendChild(input);
  li.appendChild(div);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn); // konczy jak w html
  list.appendChild(li);

  editBtn.addEventListener("click", () => {
    if (editBtn.innerHTML.toLowerCase() === "edit") {
      input.removeAttribute("readonly");
      editBtn.focus();
      editBtn.innerText = "SAVE";
      input.classList.add('editing');
    } else {
      input.setAttribute("readonly", true);
      editBtn.innerText = "EDIT";
      input.classList.remove('editing');
    }
  });

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
});


