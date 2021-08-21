function Book(title, author, pages, status) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = status;
	this.info = () => {
		return `${title} by ${author}, ${pages} pages, ${status}`;
	};
}

function addBookToLibrary() { }

// function displayBooks() {
// 	for (book in myLibrary) {
// 		//display book
// 	}
// }

let myLibrary = [];

const table = document.querySelector('#table');
const tbody = document.querySelector('#table > tbody');
const newBookButton = document.querySelector('#new-book-button');

newBookButton.addEventListener('click', (e) => {
	const tableRow = document.createElement('tr');
	const bookCell = document.createElement('td');
	bookCell.className = 'bookCell';
	const bookInput = document.createElement('input');
	const authorCell = document.createElement('td');
	authorCell.className = 'authorCell';
	const authorInput = document.createElement('input');
	const pagesCell = document.createElement('td');
	pagesCell.className = 'pagesCell';
	const pagesInput = document.createElement('input');
	const statusCell = document.createElement('td');
	statusCell.className = 'statusCell';
	const statusInput = document.createElement('input');
	statusInput.type = 'checkbox';
	statusInput.id = 'statusInput';
	const statusLabel = document.createElement('label');
	statusLabel.htmlFor = 'statusInput';
	statusLabel.textContent = 'Read';
	const deleteCell = document.createElement('td');
	const deleteButton = document.createElement('button');
	deleteButton.className = 'delete-button';
	const deleteButtonImage = document.createElement('img');
	deleteButtonImage.src = './images/trash-can3.png';

	tbody.append(tableRow);
	tableRow.append(bookCell, authorCell, pagesCell, statusCell, deleteCell);
	bookCell.append(bookInput);
	authorCell.append(authorInput);
	pagesCell.append(pagesInput);
	statusCell.append(statusLabel, statusInput);
	deleteCell.append(deleteButton);
	deleteButton.append(deleteButtonImage);
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

/*
TO-DO LIST:
- Change status button CHECK
- Add delete button CHECK
- Review TOP project orientation
*/