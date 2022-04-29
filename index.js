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

    getBookNames(){
        return this.books.map(book => book.name);
    }

    addBook(book){
        this.books.push(book);
    }

    addPets(pet){
        this.pets.push(pet);
    }
}

const fred = new User('Fred', 'Miramontes', [], []);

console.log(fred.getBookNames());
fred.addBook({name: "The Hobbit and the Lord of the Rings", author:"J R R Tolkien"});
console.log(fred.getBookNames());
fred.addBook({name: "Harry Potter and the Sorcerer’s Stone ", author:"J.K. Rowling"});
console.log(fred.getBookNames());

console.log(`total of pets: ${fred.countPets()}`);
fred.addPets({name: "Lucky", type: "cat"});
console.log(`total of pets: ${fred.countPets()}`);
fred.addPets({name: "Bella", type: "dog"});
console.log(`total of pets: ${fred.countPets()}`);

console.log(fred.getFullName());