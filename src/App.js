import { useEffect, useContext } from "react";
import BooksCreate from "./components/BooksCreate";
import BooksList from "./components/BooksList";

import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <BooksList />
      <BooksCreate />
    </div>
  );
}

export default App;
