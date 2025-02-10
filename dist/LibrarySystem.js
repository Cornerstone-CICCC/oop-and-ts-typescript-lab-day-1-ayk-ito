"use strict";
// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["Fantasy"] = 0] = "Fantasy";
    // add 4 more
    BookGenre[BookGenre["SF"] = 1] = "SF";
    BookGenre[BookGenre["Mystery"] = 2] = "Mystery";
    BookGenre[BookGenre["Horror"] = 3] = "Horror";
    BookGenre[BookGenre["History"] = 4] = "History";
})(BookGenre || (BookGenre = {}));
var library = [];
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
function addBook(bookId, title, author, genre) {
    var book = {
        bookId: bookId,
        title: title,
        author: author,
        genre: genre,
        isAvailable: true,
    };
    library.push(book);
    return book;
}
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
function borrowBook(bookId) {
    var book;
    library.forEach(function (e) {
        if (e.bookId === bookId) {
            book = e;
        }
    });
    if (!book) {
        return "Not found";
    }
    if (!book.isAvailable) {
        return "This book is not available";
    }
    else {
        book.isAvailable = false;
        return "".concat(book.title, " has been borrowed");
    }
}
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
function returnBook(bookId) {
    var book;
    library.forEach(function (e) {
        if (e.bookId === bookId) {
            book = e;
        }
    });
    if (!book) {
        return "Not found";
    }
    if (book.isAvailable) {
        return "".concat(book.title, " is already available");
    }
    else {
        book.isAvailable = true;
        return "".concat(book.title, " has been returned");
    }
}
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
function checkAvailability(bookId) {
    var book;
    library.forEach(function (e) {
        if (e.bookId === bookId) {
            book = e;
        }
    });
    if (!book) {
        return false;
    }
    if (!book.isAvailable) {
        return false;
    }
    else {
        return true;
    }
}
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
function removeBook(bookId) {
    var bookIndex = -1;
    var book;
    library.forEach(function (e, i) {
        if (e.bookId === bookId) {
            book = e;
            bookIndex = i;
        }
    });
    if (!book || bookIndex === -1) {
        return "Not found";
    }
    else {
        library.splice(bookIndex, 1);
        return "".concat(book.title, " has been removed from the library");
    }
}
// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"
