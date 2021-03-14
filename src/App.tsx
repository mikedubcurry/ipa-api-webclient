import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Results } from "./pages/Results";
import "./styles/index.css";
import { Beer, Brewer, Result } from "./types";

const searchResults: Result<Beer, Brewer>[] = [
    {
        item: {
            name: "Subway Mosaic",
            alcohol: 6.5,
            description: "A juicy and mellow drink.",
            _id: "6765",
            brewer: {
                location: "Saratoga, NY",
                name: "Melrick and Co.",
                _id: "123412343",
            },
            isAlcoholic: true,
        },
    },
    {
        item: {
            alcohol: 5,
            name: "Mike's Juicy Drank",
            description: "A juicy, sweet ale with hints of pineapple.",
            _id: "34r345",
            brewer: {
                location: "Albany, NY",
                name: "Madman Mike's",
                _id: "asdfhkl",
            },
            isAlcoholic: true,
        },
    },
    {
        item: {
            name: "Madman Mike's",
            location: "Albany, NY",
            _id: "asdfhkl",
        },
    },
    {
        item: {
            location: "Saratoga, NY",
            name: "Melrick and Co.",
            _id: "123412343",
        },
    },
];

function App() {
    return (
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/search/:query">
                <Results results={searchResults} />
            </Route>
        </Router>
    );
}

export default App;
