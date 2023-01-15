import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
  }, []);

  const editBook = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBook = async (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    const res = await axios.delete(`http://localhost:3001/books/${id}`);

    console.log(res);
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const id = Math.floor(Math.random() * 9999);
    //const updatedBooks = [...books, { id: id, title: title }];
    const res = await axios.post("http://localhost:3001/books", { id, title });
    setBooks([...books, res.data]);
  };

  const valueToShare = {
    books,
    deleteBook,
    createBook,
    fetchBooks,
    editBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
