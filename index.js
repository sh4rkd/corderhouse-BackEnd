class User{
    constructor(name, surname, books, pets){
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets;
    }

    getFullName(){
        return `${this.name} ${this.surname}`;
    }

    countPets(){
        return this.pets.length;
    }

    addBook(book){
        this.books.push(book);
    }

    getBookNames(){
        return this.books.map(book => book.name);
    }
}

fred = new User('Fred', 'Miramontes', [{name: "The Hobbit and the Lord of the Rings", author:"J R R Tolkien"},{name: "Harry Potter and the Sorcerer’s Stone ", author:"J.K. Rowling"}], [{name: "Lucky", type: "cat"},{name: "Bella", type: "dog"}]);

//using countPets()
console.log(`total of pets: ${fred.countPets()}`);

//using getBooksNames()
console.log(fred.getBookNames());

//using getFullName()
console.log(fred.getFullName());