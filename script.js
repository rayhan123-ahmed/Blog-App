// select all elements
const titleInput = document.querySelector("#titleInput");
const contentInput = document.querySelector("#contentInput");
const addPostBtn = document.querySelector("#addPostBtn");
const postsContainer = document.querySelector("#postsContainer");



let store = JSON.parse(localStorage.getItem("store")) || [];

addPostBtn.addEventListener("click", () => {
  const title = titleInput.value;
  const content = contentInput.value;

  if (title === "" || content === "") {
    alert("right something!");
    return;
  }

  const date = new Date();

  const dateString = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const postData = {
    title,
    content,
    date: dateString,
  };

  store.push(postData);

  localStorage.setItem("store", JSON.stringify(store));

 createPost(postData, store.length - 1);

  titleInput.value = "";
  contentInput.value = "";
});

// create post function
function createPost(data, index) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerHTML = `
   <h2 class='title'>${data.title}</h2>
   <p class='content'>${data.content}</p>
   <div class='post-footer'>
   <small class='date'>${data.date}</small>
   <div class='btn-container'>
 <button class='edit-btn'><span class="material-symbols-outlined">edit</span>
   Edit
</button>
 <button class='delete-btn'><span class="material-symbols-outlined">delete</span>
   Delete
</button>
   </div>
   </div>
  
  `;
  const deleteBtn = post.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    store.splice(index, 1);
    localStorage.setItem("store", JSON.stringify(store));
    post.remove();
  });

  const editBtn = post.querySelector(".edit-btn");
  const titleEl = post.querySelector(".title");
  const contentEl = post.querySelector(".content");

  let isEditing = false;

  editBtn.addEventListener("click", () => {
    if (!isEditing) {
      titleEl.innerHTML = `<input type="text" value="${data.title}" class="edit-title">`;
      contentEl.innerHTML = `<textarea class="edit-content">${data.content}</textarea>`;

      editBtn.innerText = `save`;
      isEditing = true;
    } else {
      const newTitle = post.querySelector(".edit-title").value;
      const newContent = post.querySelector(".edit-content").value;

      titleEl.innerText = newTitle;
      contentEl.innerText = newContent;

      store[index].title = newTitle;
      store[index].content = newContent;
      localStorage.setItem("store", JSON.stringify(store));

      editBtn.innerHTML = `<button class='edit-btn'><span class="material-symbols-outlined">edit</span>Edit</button>`;

      isEditing = false;
    }
  });
 

  postsContainer.appendChild(post);
}

// this has been created so that after refresh the page notes should remain
store.forEach((data, index) => {
  createPost(data, index);
});
