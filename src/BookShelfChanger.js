import React from "react";

export default ({ value, onUpdate }) =>{

    return(<div className="book-shelf-changer">
        <select
            onChange={e => {
                e.preventDefault();
                onUpdate(e.target.value);
            }}
            defaultValue={value ? value : "none"}
        >
            <option value="none" disabled>
                Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    </div>);
}