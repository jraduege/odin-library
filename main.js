const collapseButton = document.querySelector(".collapse")
const expandButton = document.querySelector(".newbook");
const bookAdd = document.querySelector(".book-add");
const sidebar = document.querySelector(".sidebar");

collapseButton.addEventListener("click",moveSidebar);
expandButton.addEventListener("click",moveSidebar);

function moveSidebar() {
    let barWidth = getComputedStyle(sidebar).width;
    console.log(barWidth);

    let newWidth = (barWidth==="120px") ? "300px" : "120px";
    console.log(newWidth);
    collapseButton.classList.toggle("hidden");
    expandButton.classList.toggle("hidden");
    bookAdd.classList.toggle("hidden");
    sidebar.style.width=newWidth;
}
