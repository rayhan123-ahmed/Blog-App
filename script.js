// select all elements
const titleInput = document.querySelector("#titleInput");
const contentInput = document.querySelector("#contentInput");
const addPostBtn = document.querySelector("#addPostBtn");
const postsContainer = document.querySelector("#postsContainer");

const date = new Date();
const dateString = date.toLocaleDateString("en-GB",{
  day: '2-digit',
  month:'short',
  year: 'numeric'
});

addPostBtn.addEventListener("click", () => {
  const title = titleInput.value;
  const content = contentInput.value;

  if (title === "" || content === "") {
    alert("right something!");
    return;
  }
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerHTML = `
   <h2>${title}</h2>
   <p>${content}</p>
   <div class='post-footer'>
   <small class='date'>${dateString}</small>
   <div class='btn-container'>
 <button class='delete-btn'><span class="material-symbols-outlined">delete</span>
   Delete
</button>
   </div>
   </div>
  
  `;
  const deleteBtn = post.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    post.remove();
  });

  postsContainer.appendChild(post);

  titleInput.value = "";
  contentInput.value = "";
});
