const treeItems = document.querySelectorAll(".tree li");

treeItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});