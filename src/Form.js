import React, { useState } from "react"

export default function Form(event) {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for the meaning of ✨${keyword}✨`);
    }

    function keywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={keywordChange} class="form-control" placeholder="Search ..."></input>
                <button type="submit" class="btn btn-primary" >🔎</button>
            </form>
        </div>
    );
}