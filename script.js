// select all elements
const titleInput = document.querySelector("#titleInput");
const contentInput = document.querySelector("#contentInput");
const addPostBtn = document.querySelector("#addPostBtn");
const postsContainer = document.querySelector("#postsContainer");

addPostBtn.addEventListener("click", () => {
  const title = titleInput.value;
  const content = contentInput.value;

  if (title === "" || content === "") {
    alert("right something!");
    return;
  }
  const post = document.createElement("div");
  post.classList.add('post')
  post.innerHTML = `
   <h2>${title}</h2>
   <p>${content}</p>
   <button class='delete-btn'>Delete</button>
  `;
  const deleteBtn = post.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    post.remove();
  });

  postsContainer.appendChild(post);

  titleInput.value = "";
  contentInput.value = "";
});
