import BooksShow from "./BooksShow";
import useBooksContext from "../hooks/context-helper";

function BooksList() {
  const { books } = useBooksContext();
  const bookList = books.map((book) => {
    return <BooksShow key={book.id} book={book} />;
  });

  return <div className="book-list">{bookList}</div>;
}

export default BooksList;
