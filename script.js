const newBookButton = document.querySelector(".newBook");
const addBookDiv = document.querySelector(".addBookDetails");
const addedBooksDiv = document.querySelector(".addedBooks");
const bookCard = document.querySelector(".bookCard");
document.querySelector("#newBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
});

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    displayBooks();
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

newBookButton.addEventListener("click", function() {
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.style.display = "block";
});

function displayBooks() {
    let libraryEl = document.querySelector(".addedBooks");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "bookCard");
        bookEl.innerHTML = `
        <div class="cardHeader">
            <h3 class="bookTitle">${book.title}</h3>
            <h5 class="bookAuthor">${book.author}</h5>
        </div>
        <div class="cardBody">
            <p>${book.pages} pages</p>
            <p class="readStatus">${book.read ? "Read" : "Not Read Yet"}</p>
        </div>
        <div class="cardBodyButtons">
            <button class="removeBtn" onclick="removeBook(${i})">Remove</button>
            <button class="toggleReadBtn" onclick="toggleRead(${i})">Toggle Read</button>
        </div>`;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// test branch

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead
    }
}

class Library {
    constructor() {
        this.books = []
    }
    addBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook);
        };
    }
    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
    }
    getBook(title) {
        return this.books.find((book) => book.title === title);
    }
    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title);
    }
}

const library = new Library();

const createBookCard = (book) => {
    let libraryEl = document.querySelector(".addedBooks");
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    removeBtn.textContent = 'Remove';

    if (book.isRead) {
        readBtn.textContent = 'Read';
        readBtn.classList.add('greenBtn');
    } else {
        readBtn.textContent = 'Not read';
        readBtn.classList.add('redBtn');
    }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    buttonGroup.appendChild(readBtn);
    buttonGroup.appendChild(removeBtn);
    bookCard.appendChild(buttonGroup);
    libraryEl.appendChild(bookCard);
}