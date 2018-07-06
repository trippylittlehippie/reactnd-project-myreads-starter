import React from "react";
import BookSection from "./BookSection"
export default ({ books, category, onUpdate }) =>
    <div className="bookshelf">
        <h2 className="bookshelf-title">
            {category}
        </h2>
        <div className="bookshelf-books">
            <BookSection books={books} onUpdate={onUpdate} />
        </div>
    </div>;