renderHeader();

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const root = document.querySelector("#root");
const editModal = document.querySelector("#editModal");
let todos = [];
let todo;
let todus;

// Pagination için gerekli atamalar global olarak tanımlandı.
const itemSize = 15;
let currentPage = 1;

const renderTodos = (page = 1) => {
  root.innerHTML = "";
  const table = document.createElement("table");
  table.setAttribute("class", "table table-hover");

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th scope="col">id 
	  	<button type="button" class="btn btn-light id-sorting">&darr;</button> 
	  	<button type="button" class="btn btn-light id-unsorting">&uarr;</button>
	  </th>
      <th scope="col">Başlık 
	  	<button type="button" class="btn btn-light title-sorting">&darr;</button> 
	  	<button type="button" class="btn btn-light title-unsorting">&uarr;</button>
	  </th>
      <th scope="col">Kullanıcı id 
	 	 <button type="button" class="btn btn-light userid-sorting">&darr;</button> 
	  	<button type="button" class="btn btn-light userid-unsorting">&uarr;</button>
	  </th>
      <th scope="col">Durum 
	  	<button type="button" class="btn btn-light bool-sorting">&darr;</button> 
	  	<button type="button" class="btn btn-light bool-unsorting">&uarr;</button>
	  </th>
      <th scope="col"></th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  const renderItem = (item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.userId}</td>
      <td>${item.completed ? "Tamamlandı" : "Yapılacak"}</td>
      <td>
        <button class="btn btn-xs btn-danger remove" data-id=${
          item.id
        }>Sil</button>
        <button class="btn btn-xs btn-warning edit" data-id=${
          item.id
        }>Düzenle</button>
      </td>
    `;
    tbody.appendChild(tr);
  };

  // Pagination İşlemleri
  page--;
  let start = itemSize * page;
  let end = start + itemSize;
  let paginatedItems = todos.slice(start, end);
  paginatedItems.forEach((item) => {
    renderItem(item);
  });

  table.appendChild(tbody);
  root.append(table);

  //Sorting İşlemleri
  document.querySelector(".title-sorting").addEventListener("click", () => {
    todos.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    renderTodos();
  });

  document.querySelector(".title-unsorting").addEventListener("click", () => {
    todos.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();

      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });

    renderTodos();
  });

  document.querySelector(".bool-sorting").addEventListener("click", () => {
    todos.sort((a, b) => {
      return a.completed - b.completed;
    });
    renderTodos();
  });

  document.querySelector(".bool-unsorting").addEventListener("click", () => {
    todos.sort((a, b) => {
      return b.completed - a.completed;
    });
    renderTodos();
  });

  document.querySelector(".id-sorting").addEventListener("click", () => {
    todos.sort((a, b) => {
      return a.id - b.id;
    });
    renderTodos();
  });

  document.querySelector(".id-unsorting").addEventListener("click", () => {
    todos.sort((a, b) => {
      return b.id - a.id;
    });
    renderTodos();
  });

  document.querySelector(".userid-sorting").addEventListener("click", () => {
    todos.sort((a, b) => {
      return a.userId - b.userId;
    });
    renderTodos();
  });

  document.querySelector(".userid-unsorting").addEventListener("click", () => {
    todos.sort((a, b) => {
      return b.userId - a.userId;
    });
    renderTodos();
  });

  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.getAttribute("data-id"));
      if (confirm("kaydı silmek istediğinize emin misiniz?")) {
        todos = todos.filter((x) => x.id !== id);
        renderTodos();
      }
    });
  });

  document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.getAttribute("data-id"));
      todo = todos.find((todo) => todo.id == id);
      editModal.querySelector("#title").value = todo.title;
      editModal.querySelector("#completed").checked = todo.completed;
      editModal.style.display = "block";
      editModal.classList.add("show");
    });
  });
};

document.querySelectorAll(".page-link").forEach((button) => {
  button.addEventListener("click", () => {
    let data = button.getAttribute("data-id");
    currentPage = Number(data);
    renderTodos(currentPage);
  });
});

editModal.querySelector("#save").addEventListener("click", () => {
  todo.title = editModal.querySelector("#title").value;
  todo.completed = editModal.querySelector("#completed").checked;
  const index = todos.findIndex((t) => t.id == todo.id);
  todos[index] = todo;
  renderTodos();
  editModal.style.display = "none";
  editModal.classList.remove("show");
});

editModal.querySelectorAll(".close").forEach((button) => {
  button.addEventListener("click", () => {
    editModal.style.display = "none";
    editModal.classList.remove("show");
  });
});

let fetchData = fetch(todosUrl)
  .then((resp) => resp.json())
  .then((data = []) => {
    todos = data;
    renderTodos();
  })
  .catch((error) => {
    errorLogger(error);
  });

// sıralama ödevi algoritması
// table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek.
// event listener hangi kolon için tıklanıyorsa
// sort metodu kullanılarak sıralama yapılacak
// sıralanmış todos'todus içerisine atılacak
// renderTodos metodu çalıştırılacak.
