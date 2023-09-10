const newBookButton = document.getElementsByClassName("newBook");
const addBookDiv = document.getElementsByClassName("addBookDetails");
const addedBooksDiv = document.getElementsByClassName("addedBooks");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
}

function addBookToLibrary() {

}

const theHobbit = new Book("The Hobbit", "J.R.R.", 295, "not read");
const lotr1 = new Book("First LOTR", "J.Something", 600, "have read");
const lotr2 = new Book("Second LOTR", "J.Someone", 400, "not read");
const lotr3 = new Book("Third LOTR", "J.Who", 300, "have read");

console.log(theHobbit.info());
console.log(lotr1.info());
console.log(lotr2.info());
console.log(lotr3.info());
