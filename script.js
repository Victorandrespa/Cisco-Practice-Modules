// Object that describes a train ticket and store in it the ticket variable


let ticket = {
    from: "carretera",
    to: "zona 4",
    price: 20,
};

console.log("Ticket desde: " + ticket.from);
console.log("Ticket para: " + ticket.to);
console.log("Precio: " + ticket.price);


// declare an empty object and save it to a person variable

let person = {};
person.name = "Victor";
person.surname = "Hugo";

console.log(person.name + " " + person.surname);

// Create an array of three objects representing the books, the properties are: title, author, pages.

let books = [{
    titulo: "Speaking Javascript",
    autor: "Axel Rauschmayer",
    pages: 460
}, {
    titulo: "Programming Javascript Aplications",
    autor: "Eric Elliot",
    pages: 254
}, {
    titulo: "Undestanding ECMAScript 6",
    autor: "Nicolas C. Zakas",
    pages: 352
}
];

console.log( books[2].autor );


// Add a new book to the collection, agregar al final

let newBook = {
    titulo: "Learning Javascrip Design Patterns",
    autor: "Addy Osmani",
    pages: 254
}
books.push(newBook);

console.log(books.length);
console.log(books[3].titulo);



// Slice to copy the last two books to the new array

let selectedBooks = books.slice(-2);


// Reove the first iten of the array

books.shift();

console.log(books.length);
console.log(books[0].titulo);


// Display the sum of the pages of all the books from the collection

let sum = books[0].pages + books[1].pages + books[2].pages;

console.log("Suma de Paginas: " + sum );