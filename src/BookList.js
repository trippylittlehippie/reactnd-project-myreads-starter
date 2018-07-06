import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import BookShelf from "./BookShelf"
const BookList = ({ library, onUpdate }) => {
    var currentlyReading = []
    var wantToRead = []
    var read = []
    Object.keys(library).forEach((data)=>{
        switch(library[data].shelf) {
            case "read":
                read.push(library[data])
                break;
            case "wantToRead":
                wantToRead.push(library[data])
                break;
            case "currentlyReading":
                currentlyReading.push(library[data])
                 break;
        }

    })
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf
                        category="Currently Reading"
                        books={currentlyReading}
                        onUpdate={onUpdate}
                    />
                    <BookShelf
                        category="Want To Read"
                        books={wantToRead}
                        onUpdate={onUpdate}
                    />
                    <BookShelf
                        category="Read"
                        books={read}
                        onUpdate={onUpdate}
                    />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
};

export default BookList;