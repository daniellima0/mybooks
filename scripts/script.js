function Book(title, author, pages, status) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = status;
}

function addBookToLibrary(newBookObject) {
	myLibrary.push(newBookObject);
}

function displayBooks() {
	for (let i = 0; i < myLibrary.length; i++) {
		tbody.innerHTML += `<tr>
    <td>${myLibrary[i].title}</td>
    <td>${myLibrary[i].author}</td>
    <td>${myLibrary[i].pages}</td>
    <td>${myLibrary[i].status}</td>
    <td><button class="delete-button"><img src="./images/trash-can3.png" alt=""></button></td>
    </tr>`;
	}
}

function removeBooksFromScreen() {
	let tbodyLength = tbody.childElementCount;
	let tbodyChildrenArray = Array.from(tbody.children);

	for (let i = 1; i < tbodyLength; i++) {
		tbodyChildrenArray[i].remove();
	}
}

function removeBooksFromArray() {
	myLibrary = [];
}

function checkBookStatus() {
	let statusOptions = document.getElementsByName('status');
	let checkedOptionId;

	for (let option of statusOptions) {
		if (option.checked) {
			checkedOptionId = option.id;
		}
	}

	if (checkedOptionId == 'read-input') return 'Read';
	return 'Unread';
}

function hideBookFromScreen() {}

let myLibrary = [];
const submitButton = document.querySelector('#submit-button');
const tbody = document.querySelector('#table > tbody');
const clearButton = document.querySelector('#clear-button');
const deleteButtonList = Array.from(
	document.querySelectorAll('.delete-button')
);

submitButton.addEventListener('click', (e) => {
	let titleName = document.querySelector('#title-input').value;
	let authorName = document.querySelector('#author-input').value;
	let pagesNumber = document.querySelector('#pages-input').value;
	let status = checkBookStatus();

	// console.log(titleName, authorName, pagesNumber, status);

	if (
		titleName != '' &&
		authorName != '' &&
		pagesNumber != '' &&
		status != ''
	) {
		let newBookObject = new Book(titleName, authorName, pagesNumber, status);
		addBookToLibrary(newBookObject);
		newBookObject['index'] = myLibrary.indexOf(newBookObject);
		console.log(newBookObject.index);
		removeBooksFromScreen();
		displayBooks();
	}
});

clearButton.addEventListener('click', (e) => {
	console.log('clear button clicked');
	removeBooksFromScreen();
	removeBooksFromArray();
});

deleteButtonList.forEach((deleteButton) => {
	deleteButton.addEventListener('click', (e) => {
		alert('worked');
		hideBookFromScreen();
	});
});

/*
TO DO LIST
- solve form related issue
- add option to change status after adding a book
- find out why clear all button stop working after adding a book
- new delete buttons 
*/
