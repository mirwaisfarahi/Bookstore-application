import React from 'react';
import AddBook from './AddBook';
import Book from './BookCard';

function BooksList() {
  return (
    <div>
      <h1>Books</h1>
      <Book title="Programming with Java" author="ANdrew High" />
      <AddBook />
    </div>
  );
}

export default BooksList;
