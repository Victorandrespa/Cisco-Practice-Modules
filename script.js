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

console.log(books[2].autor);


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

console.log("Suma de Paginas: " + sum);



// Scenario practice Test


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

contacts.push( {
        name: "Maisie Haley" ,
        phone: "09135313030",
        email: "risus.Quisque@urna.ca."
    }
);

console.log(contacts[0].name +"/"+ contacts[0].phone +"/"+ contacts[0].email ) ;
console.log(contacts[3].name +"/"+ contacts[3].phone +"/"+ contacts[3].email ) ;



// Condicional execution

let number = prompt ("Enter a random number");
if (number > 90 && number < 110) {
    alert("Bingo!");
}else{
    alert("Miss");
}

let number2 = prompt ("Enter a random number");
let message = (number2 > 90 && number2 < 110) ? "Bingo" : "Miss";
alert(message);


let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let operand = prompt("Enter operand (+,-,* or /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber;
            break;
        case "-": result = firstNumber - secondNumber;
            break;
        case "*": result = firstNumber * secondNumber;
            break;
        case "/": result = firstNumber / secondNumber;
            break;
    
        default: result = "Error: unknown operand"
    }
} else {
    result = "Error: at least one of the enterd values isnt a number"
}
alert(result);

