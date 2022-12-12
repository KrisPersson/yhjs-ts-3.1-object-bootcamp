import { users } from "./users.js";
const bookArr = [
    {
        title: 'The Fellowship of the Ring',
        author: 'J.R.R. Tolkien',
        numPages: 479
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        numPages: 309
    }, {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        numPages: 224
    }
];
function findBook(booksArr, searchedWord) {
    booksArr.forEach(book => {
        if (book.title.toLowerCase() === searchedWord.toLowerCase()) {
            return book;
        }
    });
    return null;
}
function letterFrequency(input) {
    let returnObj = {};
    for (let i = 0; i < input.length; i++) {
        if (returnObj[input[i]]) {
            returnObj[input[i]] += 1;
        }
        else {
            returnObj[input[i]] = 1;
        }
    }
    console.log(returnObj);
    return returnObj;
}
letterFrequency("kalle"); // => {"k": 1. "a": 1, "l": 2, "e": 1}
letterFrequency("aaaa"); // => {"a": 4}
letterFrequency("ni talar bra latin"); // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }
// USER REGISTER
// filterByCountry
// Skapa en funktion som tar emot listan på användare och en landskod och returnerar en ny lista
// innehållande endast användare med den landskoden.
function filterByCountry(users, code) {
    return users.filter(user => {
        if (user.nat === code) {
            return user;
        }
    });
}
console.log(filterByCountry(users, 'FR'));
// filterByGender
// Skapa en funktion som tar emot listan på användare och en sträng "Male" eller "Female" och
// returnerar en ny lista innehållande endast kvinnliga eller manliga användare.
function getAllTitles(users) {
    const allTitles = [];
    users.forEach(user => {
        const title = user.name.title;
        if (allTitles.indexOf(title) === -1) {
            allTitles.push(title);
        }
    });
    return allTitles;
}
const allTitles = ['Mr', 'Miss', 'Mademoiselle', 'Ms', 'Monsieur', 'Mrs', 'Madame']; // Result from calling getAllTitles(users)
function filterByGender(users, gender) {
    const males = [];
    const females = [];
    users.forEach(user => {
        const title = user.name.title;
        if (title === "Mr" || title === "Monsieur") {
            males.push(user);
        }
        else {
            females.push(user);
        }
    });
    if (gender === "Male") {
        return males;
    }
    else {
        return females;
    }
}
const searchByGender = filterByGender(users, "Male");
console.log(searchByGender);
// listEmails
// Skapa en funktion som tar emot listan på användare och returnerar en lista innehållandes endast 
// användarnas emailaddresser
function listEmails(users) {
    const returnArr = [];
    users.forEach(user => {
        returnArr.push(user.email);
    });
    return returnArr;
}
console.log(listEmails(users));
// Utmaning! - Reformat Emails
// Chefen på bolaget vill att alla användare ska få nya e-mailaddresser. 
// Just nu följer deras e-mail formatet förnamn.efternamn@example.com men chefen vill att de ska
// följa formatet efternamn.förnamn@evilcorp.countrydomain.
// Skapa en funktion som listar alla e-mail-adresser enligt det nya formatet.
function formatEmailAddresses(users) {
    const newEmailAddresses = [];
    users.forEach(user => {
        let newAddress = '';
        newAddress += user.name.first;
        newAddress += '.';
        newAddress += user.name.last;
        newAddress += "@";
        newAddress += "evilcorp.";
        if (user.nat !== 'GB' && user.nat !== 'ES') {
            newAddress += user.nat;
        }
        else if (user.nat === 'GB') {
            newAddress += 'uk';
        }
        else if (user.nat === 'ES') {
            newAddress += 'ee';
        }
        newEmailAddresses.push(newAddress.toLowerCase());
    });
    return newEmailAddresses;
}
console.log(formatEmailAddresses(users));
