const table = document.getElementById("userTable");

//CRUD: read
//get: fetch fonksiyonuna parametre girilmediğinde get işlemi yapılır.
function getUserList() {
  fetch(`https://reqres.in/api/users`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      for (user of data.data) {
        //console.log(user);
        table.innerHTML += `<tr>
        <td><input class="form-control" type="text" value="${user.first_name}" id="first_name_${user.id}"></td>
        <td><input class="form-control" type="text" value="${user.last_name}" id="last_name_${user.id}"></td>
        <td><input class="form-control" type="text" value="${user.email}" id="email_${user.id}"></td>
        <td><button type="button" class="btn btn-warning" href="" onclick="updateUser(${user.id})">Düzenle</button></td>
        <td><button type="button" class="btn btn-danger" href="" onclick="deleteUser(${user.id})">Sil</button></td>
    </tr>`;
      }
    });
}
getUserList();

//CRUD: create
//post
function createUser() {
  let data = {
    first_name:
      document.getElementById("first_name").value || "Değer Girilmedi",
    last_name: document.getElementById("last_name").value || "Değer Girilmedi",
    email: document.getElementById("email").value || "Değer Girilmedi",
  };
  fetch(`https://reqres.in/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      table.innerHTML += `<tr>
        <td><input class="form-control" type="text" value="${data.first_name}" id=""></td>
        <td><input class="form-control" type="text" value="${data.last_name}" id=""></td>
        <td><input class="form-control" type="text" value="${data.email}" id=""></td>
        <td><button type="button" class="btn btn-warning" href="" onclick="updateUser(${data.id})">Güncelle</button></td>
        <td><button type="button" class="btn btn-danger" href="" onclick="deleteUser(${data.id})">Sil</button></td>
    </tr>`;
    })
    .catch((error) => {
      console.log("hata:", error);
    });
}

//CRUD: Update
//put
function updateUser(id) {
  let data = {
    first_name:
      document.getElementById("first_name_" + id).value || "Değer Girilmedi",
    last_name:
      document.getElementById("last_name_" + id).value || "Değer Girilmedi",
    email: document.getElementById("email_" + id).value || "Değer Girilmedi",
  };
  fetch(`https://reqres.in/api/users/`+id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("kullanıcı güncellendi", data);
    })
}

//CRUD: Delete
//delete
function deleteUser(id){
    fetch(`https://reqres.in/api/users/`+id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(res => console.log(res))
  .then(data=>{
    console.log("Kullanıcı Silindi",data);
  })
  .catch(error=> console.log(error));
}