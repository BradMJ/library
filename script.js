const newBookButton = document.querySelector(".newBook");
const libraryEl = document.querySelector(".addedBooks");

newBookButton.addEventListener("click", function() {
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.style.display = "block";
});

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

const updateLibrary = () => {
    resetLibrary();
    for (let book of library.books) {
        createBookCard(book);
    }
}

const resetLibrary = () => {
    libraryEl.innerHTML = '';
}

const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookCard.classList.add('bookCard');
    buttonGroup.classList.add('buttonGroup');
    readBtn.classList.add('btn');
    removeBtn.classList.add('btn');
    readBtn.onclick = toggleRead;
    removeBtn.onclick = removeBook;

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

const getBookFromInput = () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#read').checked;
    return new Book(title, author, pages, isRead);
}

const addBook = (e) => {
    e.preventDefault();
    const newBook = getBookFromInput();

    if (library.isInLibrary(newBook)) {
        return;
    } else {
        library.addBook(newBook);
        updateLibrary();
    }
}

const removeBook = (e) => {
    const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
    );
    library.removeBook(title);
    updateLibrary();
}

const toggleRead = (e) => {
    const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
    );
    const book = library.getBook(title);
    book.isRead = !book.isRead;
    updateLibrary();
}

newBookForm.onsubmit = addBook;