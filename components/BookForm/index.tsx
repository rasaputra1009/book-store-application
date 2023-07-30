import React, { useState } from "react";
import style from "./style.module.scss";

const BookForm = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData.name || "");
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [isbn, setIsbn] = useState(initialData.isbn || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      name,
      imageUrl,
      price,
      isbn,
    };

    onSubmit(bookData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.form}>
        <h1>{initialData ? "UPDATE BOOK" : "ADD NEW BOOK"}</h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          id="isbn"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button type="submit">{initialData ? "Update" : "Submit"}</button>
      </div>
    </form>
  );
};

export default BookForm;
