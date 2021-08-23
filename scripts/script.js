// function Book(title, author, pages, status) {
// 	this.title = title;
// 	this.author = author;
// 	this.pages = pages;
// 	this.status = status;
// 	this.info = () => {
// 		return `${title} by ${author}, ${pages} pages, ${status}`;
// 	};
// }

// function addBookToLibrary(book) {

// }

// function displayBooks() {
// 	for (book in myLibrary) {
// 		//display book
// 	}
// }

// let myLibrary = [];

const table = document.querySelector('#table');
const tbody = document.querySelector('#table > tbody');
const newBookButton = document.querySelector('#new-book-button');
// let counter = 0;

newBookButton.addEventListener('click', (e) => {
	const tableRow = document.createElement('tr');
	// tableRow.dataset.bookNumber = `${counter}`;
	const bookCell = document.createElement('td');
	bookCell.className = 'book-cell';
	const bookInput = document.createElement('input');
	const authorCell = document.createElement('td');
	authorCell.className = 'author-cell';
	const authorInput = document.createElement('input');
	const pagesCell = document.createElement('td');
	pagesCell.className = 'pages-cell';
	const pagesInput = document.createElement('input');
	const statusCell = document.createElement('td');
	statusCell.className = 'status-cell';
	const statusInput = document.createElement('input');
	statusInput.type = 'checkbox';
	statusInput.id = 'status-input';
	const statusLabel = document.createElement('label');
	statusLabel.htmlFor = 'status-input';
	statusLabel.textContent = 'Read';
	const deleteCell = document.createElement('td');
	const deleteButton = document.createElement('button');
	deleteButton.className = 'delete-button';
	const deleteButtonImage = document.createElement('img');
	deleteButtonImage.src = './images/trash-can3.png';

	deleteButton.addEventListener('click', e => {
		tableRow.remove();
	})

	tbody.append(tableRow);
	tableRow.append(bookCell, authorCell, pagesCell, statusCell, deleteCell);
	bookCell.append(bookInput);
	authorCell.append(authorInput);
	pagesCell.append(pagesInput);
	statusCell.append(statusLabel, statusInput);
	deleteCell.append(deleteButton);
	deleteButton.append(deleteButtonImage);

	counter++;
});

document.addEventListener('keydown', (e) => {
	if (document.activeElement.tagName == 'INPUT' && e.key == 'Enter') {
		const inputedTextParagraph = document.createElement('span');
		inputedTextParagraph.textContent = document.activeElement.value;
		const currentCell = document.activeElement.parentElement;
		document.activeElement.remove();
		currentCell.append(inputedTextParagraph);
	}
});