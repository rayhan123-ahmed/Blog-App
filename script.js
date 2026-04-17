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
  post.innerHTML = `
   <h2>${title}</h2>
   <p>${content}</p>
  `;
  postsContainer.appendChild(post);

  titleInput.value = "";
  contentInput.value = "";
});
