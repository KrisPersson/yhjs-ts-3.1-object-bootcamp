import { users, User } from "./users.js"

// Bibblan
//---------

// 1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är title, author, numPages.

// 2. Skapa en array av objekt med flera stycken böcker

// 3. Skapa en funktion som söker efter en titel i arrayen, 
// om den hittar en så returneras objektet annars null. 
// Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.

interface Book {
    title: string,
    author: string,
    numPages: number
}

const bookArr: Book[] = [
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
]

function findBook(booksArr: Book[], searchedWord: string): (Book | null) {
    booksArr.forEach(book => {
        if (book.title.toLowerCase() === searchedWord.toLowerCase()) {
            return book
        }
    })
    return null
}


// Letter Frequency
// -------
// Räkna tecken i en sträng och organisera detta i ett objekt. 
// Skapa en funktion som tar en sträng som input och ger ett objekt som output.

// Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet.
// Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara
// antal förekomster av det tecknet.

// Denna övning kräver dynamiska nycklar.

interface LettersObj {
    "a"?: number,
    "b"?: number,
    "c"?: number,
    "d"?: number,
    "e"?: number,
    "f"?: number,
    "g"?: number,
    "h"?: number,
    "i"?: number,
    "j"?: number,
    "k"?: number,
    "l"?: number,
    "m"?: number,
    "n"?: number,
    "o"?: number,
    "p"?: number,
    "q"?: number,
    "r"?: number,
    "s"?: number,
    "t"?: number,
    "u"?: number,
    "v"?: number,
    "w"?: number,
    "x"?: number,
    "y"?: number,
    "z"?: number,
    "å"?: number,
    "ä"?: number,
    "ö"?: number
}


function letterFrequency(input: string) {
    let returnObj: LettersObj = {}

    for (let i = 0; i < input.length; i++) {
        if (returnObj[input[i]]) {
            returnObj[input[i]] += 1
        } else {
            returnObj[input[i]] = 1
        }
    }
    console.log(returnObj)
    return returnObj
}

letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}
letterFrequency("aaaa") // => {"a": 4}
letterFrequency("ni talar bra latin") // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }


// USER REGISTER

// filterByCountry
// Skapa en funktion som tar emot listan på användare och en landskod och returnerar en ny lista
// innehållande endast användare med den landskoden.

function filterByCountry(users: User[], code: string): User[] {
    return users.filter(user => {
        if (user.nat === code) {
            return user
        }
    })
}

console.log(filterByCountry(users, 'FR'))

// filterByGender
// Skapa en funktion som tar emot listan på användare och en sträng "Male" eller "Female" och
// returnerar en ny lista innehållande endast kvinnliga eller manliga användare.

function getAllTitles(users: User[]): User[] {
    const allTitles = []
    users.forEach(user => {
        const title = user.name.title
        if (allTitles.indexOf(title) === -1) {
            allTitles.push(title)
        }
    })
    return allTitles
}


type MaleOrFemale = ("Male") | ("Female")
const allTitles = ['Mr', 'Miss', 'Mademoiselle', 'Ms', 'Monsieur', 'Mrs', 'Madame'] // Result from calling getAllTitles(users)

function filterByGender(users: User[], gender: MaleOrFemale): User[] {
    const males: User[] = []
    const females: User[] = []
    users.forEach(user => {
        const title = user.name.title
        if (title === "Mr" || title === "Monsieur") {
            males.push(user)
        } else {
            females.push(user)
        }
    })
    if (gender === "Male") {
        return males
    } else {
        return females
    }
}
const searchByGender = filterByGender(users, "Male")

console.log(searchByGender)

// listEmails
// Skapa en funktion som tar emot listan på användare och returnerar en lista innehållandes endast 
// användarnas emailaddresser

function listEmails(users: User[]): string[] {
    const returnArr: string[] = []
    users.forEach(user => {
        returnArr.push(user.email)
    })
    return returnArr
}

console.log(listEmails(users))



// Utmaning! - Reformat Emails
// Chefen på bolaget vill att alla användare ska få nya e-mailaddresser. 
// Just nu följer deras e-mail formatet förnamn.efternamn@example.com men chefen vill att de ska
// följa formatet efternamn.förnamn@evilcorp.countrydomain.

// Skapa en funktion som listar alla e-mail-adresser enligt det nya formatet.

function formatEmailAddresses(users: User[]): string[] {
    const newEmailAddresses: string[] = []
    users.forEach(user => {
        let newAddress: string = ''
        newAddress += user.name.first
        newAddress += '.'
        newAddress += user.name.last
        newAddress += "@"
        newAddress += "evilcorp."
        if (user.nat !== 'GB' && user.nat !== 'ES') {
            newAddress += user.nat
        } else if (user.nat === 'GB') {
            newAddress += 'uk'
        } else if (user.nat === 'ES') {
            newAddress += 'ee'
        }
        newEmailAddresses.push(newAddress.toLowerCase())
    })
    return newEmailAddresses
}

console.log(formatEmailAddresses(users))
