import React, { useState } from "react";
import axios from "axios";

export default function Form(event) {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
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