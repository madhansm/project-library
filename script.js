const hobbit = {
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    language: 'English',
    genre: 'Fiction',
    pages: 400,
    description: 'The classic bestseller behind this year\'s biggest movie, this film tie-in edition features the complete story of Bilbo Baggins\' adventures in Middle-earth as shown in the film trilogy, with a striking cover image from Peter Jackson\'s film adaptation and drawings and maps by J.R.R. Tolkien.',
    completion: false
}

const anarchy = {
    name: 'The Anarchy',
    author: 'William Dalrymple',
    language: 'English',
    genre: 'History',
    pages: 576,
    description: "\'Dalrymple is a superb historian with a visceral understanding of India . A book of beauty\' - Gerard DeGroot",
    completion: false
}

let cardsContainer = document.querySelector('.cardsContainer');
let myLibrary = [hobbit, anarchy];

function createBook(name, author, language, genre, pages, description, completion) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.genre = genre;
    this.pages = pages;
    this.description = description;
    this.completion = completion;
}

function displayBook(book, card) {
    console.log(book.name);
    
    const h2 = document.createElement('h2');
    h2.append(book.name);
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


    
}

myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('card');
    cardsContainer.appendChild(card);
    displayBook(book,card);
    console.log(card);
});

const addBook = document.getElementById('addBook');
const popUp = document.getElementById('popUp');


addBook.addEventListener('click', () => popUp.style.display="block");