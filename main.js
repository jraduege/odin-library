let myLibrary = [];

function Book(title,author,pages,hasRead) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.hasRead=hasRead;
}

const collapseButton = document.querySelector(".collapse")
const expandButton = document.querySelector(".newbook");
const bookAdd = document.querySelector(".book-add");
const sidebar = document.querySelector(".sidebar");

collapseButton.addEventListener("click",moveSidebar);
expandButton.addEventListener("click",moveSidebar);

function moveSidebar() {
    let barWidth = getComputedStyle(sidebar).width;
    let newWidth = (barWidth==="120px") ? "300px" : "120px";

    collapseButton.classList.toggle("hidden");
    expandButton.classList.toggle("hidden");
    bookAdd.classList.toggle("hidden");
    sidebar.style.width=newWidth;
}

function addBook() {
    let title=document.getElementById("book-title").value;
    let author=document.getElementById("book-author").value;
    let pages=document.getElementById("book-pages").value;
    let hasRead = document.getElementById("book-read").checked;
    let newBook = new Book(title,author,pages,hasRead);
    myLibrary.push(newBook);
    makeCatalog();
}

function makeButtons(hasRead,index) {
    let div = document.createElement('div');
    let readButtonText = (hasRead) ? "Mark unread" : "Mark read";
    div.classList.add("card-button-bar");
    div.innerHTML=`<button class="toggle-read" data-index=${index}>${readButtonText}</button><button class="remove-button" data-index=${index}>Remove Book</button>`;
    return div;
}

function makeCard(Book,index) {
    let div = document.createElement('div');
    div.classList.add("card");
    div.innerHTML=`<p class="title">${Book.title}</p><p>Author: ${Book.author}</p><p>Pages: ${Book.pages}</p>`
    div.setAttribute("data-index",index);
    div.appendChild(makeButtons(Book.hasRead,index));
    return div;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeCatalog() {
    let catalog=document.querySelector(".catalog");
    removeAllChildNodes(catalog);
    myLibrary.forEach((element,index) => {catalog.appendChild(makeCard(element,index))});
}
