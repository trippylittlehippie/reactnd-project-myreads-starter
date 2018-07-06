import React from "react";
import BookShelfChanger from "./BookShelfChanger";

export default ({ book, onUpdate }) => {
    return (<div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193,backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail? book.imageLinks.thumbnail: null}`}}></div>
                <BookShelfChanger value={book.shelf} onUpdate={onUpdate} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.length > 0? book.authors.join(", "): ""}</div>
        </div>);
}