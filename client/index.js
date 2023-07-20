const URL = "http://localhost:8080/todos";
const pendingDiv = document.getElementById("pending");
const completedDiv = document.getElementById("completed");
const addBtn = document.getElementById("add");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

window.addEventListener("DOMContentLoaded", load);
addBtn.addEventListener("click", addTodo);
function load() {
  axios(URL + "/all").then((res) => {
    console.log(res);
    const pending = res.data.filter((item) => !item.completed);
    const done = res.data.filter((item) => item.completed);
    pendingDiv.innerHTML = "";
    completedDiv.innerHTML = "";
    for (const item of pending) {
      pendingDiv.innerHTML += `<div class="item">
      <span class="title">${item.title}</span>
      <span class="desc">${item.description}</span>
      <button onclick="todoCompleted(${item.id})">✅</button>
      <button onclick="removeTodo(${item.id})">❌</button>
    </div>`;
    }

    for (const item of done) {
      completedDiv.innerHTML += `  <div class="item">
      <span class="title">${item.title}</span>
      <span class="desc">${item.description}</span>
    </div>`;
    }
  });
}
function addTodo() {
  const t = title.value;
  const d = desc.value;
  const body = {
    title: t,
    description: d,
  };
  axios.post(`${URL}/add`, body).then((result) => {
    console.log(result);
    load();
  });
}
function todoCompleted(id) {
  axios.put(URL + "/completed/" + id).then((result) => {
    console.log(result);
    load();
  });
}

function removeTodo(id) {
  console.log(id);
  axios.delete(URL + "/delete/" + id).then((result) => {
    console.log(result);
    load();
  });
}
