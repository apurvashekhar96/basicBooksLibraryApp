import { useState } from "react";
import useBooksContext from "../hooks/context-helper";

function BooksEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const { editBook } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    //onEdit(book.id, title);
    editBook(book.id, title);
    onSubmit();
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="input" onChange={handleChange} value={title} />
        <button className="button primary">Submit</button>
      </form>
    </div>
  );
}

export default BooksEdit;
