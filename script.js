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

class createBook  {
    constructor(name, author, language, genre, pages, completion) {
        this.name = name;
        this.author = author;
        this.language = language;
        this.genre = genre;
        this.pages = pages;
        this.completion = completion;
    }
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
            const text = document.createTextNode(`${key}:  `)
            sub.append(text);
            const content = document.createElement('span');
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
        localStorage.setItem('libraryArray', JSON.stringify(myLibrary));

    });

    buttonReadNo.addEventListener('click', () => {
        buttonReadNo.style.display = "none";
        buttonReadNo.parentElement.querySelector('.readYes').style.display = "inline";
        book.completion = true;
        localStorage.setItem('libraryArray', JSON.stringify(myLibrary));
    });

    buttonDeleteBook.addEventListener('click', () => {
        card.remove();
        for(let i = 0; i < myLibrary.length; i++){
            if(myLibrary[i] === book){
                console.log(myLibrary);
                myLibrary.splice(i,1);
                console.log(myLibrary);
                localStorage.setItem('libraryArray', JSON.stringify(myLibrary));
            }    
        };
    });

}

function changeToNo() {
    this.style.display = "none";
    this.parentElement.querySelector('.readNo').style.display = "inline";
}

function changeToYes() {
    this.style.display = "none";
    this.parentElement.querySelector('.readYes').style.display = "inline";
}

myLibrary = JSON.parse(localStorage.getItem('libraryArray'));
if (myLibrary === null){
    myLibrary = [];
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
    document.getElementById('overlay').classList.add('overlay');
    
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
            localStorage.setItem('libraryArray', JSON.stringify(myLibrary));
            console.log(newBook);
            popUp.style.display = "none";
            displayBook(newBook);
            makeEmpty();
            document.getElementById('overlay').classList.remove('overlay');
        } else {
            alert('Fill all fields');
        }
        
        console.log(JSON.parse(localStorage.getItem('libraryArray')));
    });

let popUpCancel = document.getElementById('popUpCancel');
popUpCancel.addEventListener('click', () => {
    popUp.style.display = 'none';
    document.getElementById('overlay').classList.remove('overlay');
    makeEmpty();
})

window.addEventListener('keydown', function(e) {
    if (e.key == "Escape") {
        popUp.style.display = 'none';
        document.getElementById('overlay').classList.remove('overlay');
        makeEmpty();
    }
  });