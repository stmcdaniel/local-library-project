function findAuthorById(authors, id) {
  let found = authors.find((book) => book.id === id);
  return found;
}

function findBookById(books, id) {
  let foundBooks = books.find((book) => book.id === id);
  return foundBooks;
}

function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
  );
  let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
  );
  let finalArray = [[...booksBorrowed], [...booksReturned]];
  return finalArray;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return {...borrow, ...account};
  })
  // slice is used to return only a portion of the array as a new array object//
  .slice(0, 10);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
