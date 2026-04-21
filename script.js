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
   <h2>${data.title}</h2>
   <p>${data.content}</p>
   <div class='post-footer'>
   <small class='date'>${data.date}</small>
   <div class='btn-container'>
 <button class='edit-btn'><span class="material-symbols-outlined">edit</span>
   Delete
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

  postsContainer.appendChild(post);
}

// this has been created so that after refresh the page notes should remain
store.forEach((data, index) => {
  createPost(data, index);
});
