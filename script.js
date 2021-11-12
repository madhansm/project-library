const hobbit = {
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    language: 'English',
    genre: 'Fiction',
    pages: 400,
    about: 'The classic bestseller behind this year\'s biggest movie, this film tie-in edition features the complete story of Bilbo Baggins\' adventures in Middle-earth as shown in the film trilogy, with a striking cover image from Peter Jackson\'s film adaptation and drawings and maps by J.R.R. Tolkien.',
    completion: false
}

const anarchy = {
    name: 'The Anarchy',
    author: 'William Dalrymple',
    language: 'English',
    genre: 'History',
    pages: 576,
    about: "\'Dalrymple is a superb historian with a visceral understanding of India . A book of beauty\' - Gerard DeGroot",
    completion: false
}

let cardsContainer = document.querySelector('.cardsContainer');
let myLibrary = [hobbit, anarchy];

function createBook(name, author, language, genre, pages, about, completion) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.genre = genre;
    this.pages = pages;
    this.about = about;
    this.completion = '';
}

function displayBook(book, card) {
    
    console.log(card);
}

myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('card');
    cardsContainer.appendChild(card);
    displayBook(book,card);
    // console.log(card);
});
