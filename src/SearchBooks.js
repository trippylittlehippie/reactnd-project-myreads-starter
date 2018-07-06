import React from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import BookSection from './BookSection'
export default class SearchBooks extends React.Component {
    state = {
        query: "",
        results: [] // these are the search results
    };

    onQueryChange = e => {
        const query = e.target.value;
        this.setState({ query: query , error: false });
        console.log("query",query)
        const { library } = this.props;
        let results = {}
        if (query) {
            search(query, 20).then(response => {
                console.log("search request response =", response);
                if (!response.error) {
                    for (let book of response) {
                        if (library[book.id]) {
                            results[book.id] = library[book.id]
                        } else {
                            results[book.id] = book
                        }
                    }
                    this.setState({ results: Object.values(results) });
                }else{
                    this.setState({ error: true });
                }
            });
        }
    };

    render() {
        const { onUpdate, library } = this.props;
        const { results, query } = this.state;
        var managedResults = results
        if(!this.state.query || this.state.query.length < 0){
            managedResults = []
        }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                         NOTES: The search from BooksAPI is limited to a particular set of search terms.
                         You can find these search terms here:
                         https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                         However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                         you don't find a specific author or title. Every search is limited by search terms.
                         */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.onQueryChange}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.error ?
                        <h1>Error getting results</h1>
                        : <BookSection books={managedResults} onUpdate={onUpdate}/>
                    }
                </div>
            </div>
        );
    }
}