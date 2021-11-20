const hobbit = {
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    language: 'English',
    genre: 'Fiction',
    pages: 400,
    completion: false
}

const anarchy = {
    name: 'The Anarchy',
    author: 'William Dalrymple',
    language: 'English',
    genre: 'History',
    pages: 576,
    completion: true
}

let cardsContainer = document.querySelector('.cardsContainer');
let myLibrary = [];

function createBook(name, author, language, genre, pages, completion) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.genre = genre;
    this.pages = pages;
    this.completion = completion;
}



function displayBook(book) {
    console.log(book.name);
    
    const card = document.createElement('div');
    card.classList.add('card');
    cardsContainer.appendChild(card);

    const h2 = document.createElement('h2');
    h2.append(book.name);

    const bookRead = document.createElement('div');
    bookRead.classList.add('read');
    const readText = document.createTextNode('Read');
    bookRead.append(readText);
    
    const buttonReadYes = document.createElement('button');
    buttonReadYes.classList.add(`readYes`);
    const buttonTextYes = document.createTextNode('\u2714');
    buttonReadYes.append(buttonTextYes);
    bookRead.appendChild(buttonReadYes);

    const buttonReadNo = document.createElement('button');
    buttonReadNo.classList.add(`readNo`);
    const buttonTextNo = document.createTextNode("\u2717");
    buttonReadNo.append(buttonTextNo);
    bookRead.appendChild(buttonReadNo);


    h2.appendChild(bookRead);
    card.appendChild(h2);

    for (const key in book){
        if(key !== 'completion' && key !== 'name') {
            
            const sub = document.createElement('div');
            sub.classList.add('subheading');
            const text = document.createTextNode(`${key}: `)
            sub.append(text);
            const content = document.createElement('span');
            if (key === 'description') {
                lineBreak = document.createElement('br');
                sub.append(lineBreak);
            }
            content.append(`${book[key]}`);
            sub.appendChild(content);
            card.appendChild(sub);
        }

    }

    const buttonDeleteBook = document.createElement('button');
    buttonDeleteBook.classList.add('deleteBook');
    const buttonTextDeleteBook = document.createTextNode("Delete Book");
    buttonDeleteBook.append(buttonTextDeleteBook);
    card.appendChild(buttonDeleteBook);

    if (book.completion) {
        buttonReadNo.style.display = "none";
    } else {
        buttonReadYes.style.display = "none";
    }

    buttonReadYes.addEventListener('click', () => {
        buttonReadYes.style.display = "none";
        buttonReadYes.parentElement.querySelector('.readNo').style.display = "inline";
        book.completion = false;

    });

    buttonReadNo.addEventListener('click', () => {
        buttonReadNo.style.display = "none";
        buttonReadNo.parentElement.querySelector('.readYes').style.display = "inline";
        book.completion = true;

    });

    buttonDeleteBook.addEventListener('click', () => card.remove());

}

function changeToNo() {
    this.style.display = "none";
    this.parentElement.querySelector('.readNo').style.display = "inline";
}

function changeToYes() {
    this.style.display = "none";
    this.parentElement.querySelector('.readYes').style.display = "inline";
}


myLibrary.forEach(book => {
    displayBook(book);
});

const addBook = document.getElementById('addBook');
const popUp = document.getElementById('popUp');

function makeEmpty() {
    document.getElementById('name').value = '';
    document.getElementById('author').value = '';
    document.getElementById('language').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('pages').value = '';
}


addBook.addEventListener('click', () => {
    popUp.style.display="block";
});

    let formSubmit = document.getElementById('submit');
    formSubmit.addEventListener('click', () => {
        
        let name = document.getElementById('name').value;
        let author = document.getElementById('author').value;
        let language = document.getElementById('language').value;
        let genre = document.getElementById('genre').value;
        let pages = document.getElementById('pages').value;
        let completion = document.getElementById('completion').checked;
        console.log(name);
        if (name !== '' && author !== '' && language !== '' && genre !== '' && pages !== 0){
            console.log('not empty');
            let newBook = new createBook(name, author, language, genre, pages, completion);
            myLibrary.push(newBook);
            console.log(newBook);
            popUp.style.display = "none";
            displayBook(newBook);
            makeEmpty();
        } else {
            alert('Fill all fields');
        }
        console.log(myLibrary);
    });


