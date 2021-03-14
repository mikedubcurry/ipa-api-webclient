import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../styles/search.css";

export const Search = () => {
    const history = useHistory();
    const [query, querySet] = useState("");
    const handleSubmit = () => {
        console.log("submitted with " + query);
        history.push("/search/" + query);
        querySet("");
    };
    return (
        <div className="search">
            <p>Search for an IPA, Brewer, or a flavor profile</p>
            <input
                type="text"
                placeholder="craft, juicy, non-alcoholic"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSubmit();
                    }
                }}
                value={query}
                onChange={(e) => {
                    querySet(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    handleSubmit();
                }}
            >
                Search
            </button>
        </div>
    );
};
