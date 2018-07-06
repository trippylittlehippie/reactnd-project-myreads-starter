import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookList from "./BookList"
import SearchBooks from "./SearchBooks"

class BooksApp extends React.Component {
    state = {
        library: {}
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            const library = {}
            for (let book of books) {
                library[book.id] = book
            }
            this.setState({ library });
        });
    }

    onUpdate = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            let updatedLibrary = this.state.library;
            if (updatedLibrary[book.id]) {
                updatedLibrary[book.id].shelf = shelf;
                this.setState({ library: updatedLibrary });
            } else {
                BooksAPI.get(book.id).then(newBook => {
                    updatedLibrary[book.id] = newBook;
                    this.setState({ library: updatedLibrary });
                });
            }
        });
    };

    render() {
        const { library } = this.state;
        return (
            <div className="app">
                <Route
                    exact
                    path="/"
                    render={() =>
                        <BookList library={library} onUpdate={this.onUpdate}/>}
                />
                <Route
                    path="/search"
                    render={() =>
                        <SearchBooks library={library} onUpdate={this.onUpdate} />}
                />
            </div>
        );
    }
}

export default BooksApp;