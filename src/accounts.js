function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const accId = account.id;
  let total = 0;
  //uses shorter code, rather than using if statement//
  books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++))
  return total;
}


function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  let borrowMatch = [];
  books.forEach((item) => {
   const borrowed = item.borrows;
    //destructuring novel object.//
   const novel = {
    id: item.id,
    title: item.title,
    genre: item.genre,
    authorId: item.authorId,
    author: {},
    borrows: {}
   };
   const { id, title, genre, authorId, author, borrows } = novel;
 
   borrowed.forEach((borrow) => {
    if (borrow.id === account.id && borrow.returned === false) {
     result.push(novel);
     borrowMatch.push(borrow);
     novel.borrows = borrowMatch;
     novel.author = authors.filter((name) => name.id === novel.authorId)[0];
    }
   });
  });
  return result;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
