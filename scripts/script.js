function Book(title, author, pages, status) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = status;
}

function addBookToArray(book) {
	myLibrary.push(book);
}

function removeBooksFromScreen() {
	let tbodyLength = tbody.childElementCount;
	let tbodyChildrenArray = Array.from(tbody.children);

	for (let i = 1; i < tbodyLength; i++) {
		tbodyChildrenArray[i].remove();
	}
}

function redisplayBooks() {
	removeBooksFromScreen();

	for (let i = 0; i < myLibrary.length; i++) {
		if (myLibrary[i].status == 'Read') {
			tbody.innerHTML += `<tr>
			<td>${myLibrary[i].title}</td>
			<td>${myLibrary[i].author}</td>
			<td>${myLibrary[i].pages}</td>
			<td><label class="switch">
			<input type="checkbox" checked>
			<span class="slider round"></span>
		  </label></td>
			<td><button class="delete-button" onclick="deleteBook(${myLibrary[i].index});"><img src="./images/trash-can3.png" alt=""></button></td>
			</tr>`;
		} else if (myLibrary[i].status == 'Unread') {
			tbody.innerHTML += `<tr>
			<td>${myLibrary[i].title}</td>
			<td>${myLibrary[i].author}</td>
			<td>${myLibrary[i].pages}</td>
			<td><label class="switch">
			<input type="checkbox">
			<span class="slider round"></span>
		  </label></td>
			<td><button class="delete-button" onclick="deleteBook(${myLibrary[i].index});"><img src="./images/trash-can3.png" alt=""></button></td>
			</tr>`;
		}
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

function removeBookFromArray(index) {
	myLibrary.splice(index, 1);
}

function updateIndexOfBooks() {
	for (let i = 0; i < myLibrary.length; i++) {
		myLibrary[i]['index'] = i;
	}
}

function deleteBook(index) {
	removeBookFromArray(index);
	updateIndexOfBooks();
	redisplayBooks();
}

function deleteAllBooks() {
	while (myLibrary.length) {
		deleteBook(0);
	}
}

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

	if (
		titleName != '' &&
		authorName != '' &&
		pagesNumber != '' &&
		status != ''
	) {
		let newBookObject = new Book(titleName, authorName, pagesNumber, status);
		addBookToArray(newBookObject);
		updateIndexOfBooks();
		redisplayBooks();
	}
});

// deleteButtonList.forEach((deleteButton) => {
// 	deleteButton.addEventListener('click', (e) => {
// 		deleteBook(?); //to find out the index I would have to take the title of the book and look it up on myLibrary
// 	});
// });

// clearButton.addEventListener('click', (e) => {
// 	console.log('entrou');
// 	deleteAllBooks();
// });

/*
TO DO LIST
- solve form related issue
- add option to change status after adding a book
- find out why clear all button stop working after adding a book
- new delete buttons dont work
- add functionality to clear all and delete buttons CHECK
*/
