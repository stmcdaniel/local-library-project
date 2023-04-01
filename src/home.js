function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const checkOut = books.filter((novel) =>
  novel.borrows.filter((record) => record.returned === false).length > 0
  );
  return checkOut.length;
}

function getMostCommonGenres(books) {
  const countObj = {};
  books.forEach((name) => {
    if(countObj[name.genre]) {
      countObj[name.genre]++;
    } else {
      countObj[name.genre] = 1;
    }
  });
  return Object.entries(countObj).map(([name, count]) => {
    return {name, count};
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
  .map((novel) => {
    return { name: novel.title, count: novel.borrows.length};
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const result = [];
  authors.forEach((author) => {
    let authorName = {name: `${author.name.first} ${author.name.last}`, 
    count: 0
};
books.forEach((novel) => {
  if(novel.authorId === author.id) {
    authorName.count += novel.borrows.length;
  }
});
result.push(authorName);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
