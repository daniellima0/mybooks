function Book(title, author, pages, status) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = status;
	this.info = () => {
		return `${title} by ${author}, ${pages} pages, ${status}`;
	};
}

function addBookToLibrary() {}

function displayBooks() {
	for (book in myLibrary) {
		//display book
	}
}

let myLibrary = [];

const table = document.querySelector('#table');

const newBookButton = document.querySelector('#new-book-button');