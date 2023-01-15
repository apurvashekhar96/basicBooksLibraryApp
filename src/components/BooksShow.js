import { useState } from "react";
import BooksEdit from "./BooksEdit";
import useBooksContext from "../hooks/context-helper";

function BooksShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBook } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBook(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(!showEdit);
  };

  let display = book.title;
  if (showEdit) {
    display = <BooksEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      {display}
      <div className="actions">
        <button onClick={handleEditClick} className="edit">
          edit
        </button>
        <button onClick={handleDeleteClick} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BooksShow;
