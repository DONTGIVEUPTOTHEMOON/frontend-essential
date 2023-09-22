const main = () => {
  const titleInput = document.getElementById("title");
  const titleButton = document.getElementById("add-newtitle");
  const titleMilestoneList = document.getElementById("title-milestone");

  titleButton.addEventListener("click", (e) => {
    e.preventDefault();

    const title = document.createElement("li");
    title.textContent = titleInput.value;
    titleMilestoneList.appendChild(title);

    titleInput.value = "";

    titleMilestoneList.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    title.appendChild(deleteButton);

    deleteButton.addEventListener =
      ("click",
      () => {
        title.remove();
        // if (e.target.tagName === "SPAN") {
        //   e.target.classList.toggle("delete");
        // }
        // if (e.target.tagName === "BUTTON") {
        //   e.target.parentNode.remove();
      });

    titleInput.value = "";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
