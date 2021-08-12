let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${status}`;
    };
}

const got = new Book('Game of Thrones', 'George R. R. Martin', '500', 'not read yet');

console.log(got.info());

function addBookToLibrary() {

}

function displayBooks() {
    for (book in myLibrary) {
        //display book
    }
}

//add 'new book' button that brings up a form
const table = document.querySelector('#table');

const newBookButton = document.querySelector('#new-book');

const form = document.createElement('div');
form.style.position = 'absolute';
form.style.top = '0rem';
form.style.right = '0rem'
form.style.bottom = '0rem';
form.style.left = '0rem';
form.style.margin = 'auto';
form.style.height = '60%';
form.style.width = '60%';
form.style.backgroundColor = '#ddd';
form.style.borderRadius = '1.5rem'

newBookButton.addEventListener('click', e => {
    document.body.append(form);
});