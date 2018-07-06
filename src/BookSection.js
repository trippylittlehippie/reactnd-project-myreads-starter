import React from "react";
import Book from "./Book";

export default ({ books, onUpdate }) =>
    <ol className="books-grid">
        {books.map((book, index) =>
            <li key={index}>
                <Book book={book} onUpdate={shelf => onUpdate(book, shelf)} />
            </li>
        )}
    </ol>;