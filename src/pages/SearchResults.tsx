import React from "react";
import { Link, useParams } from "react-router-dom";

import { ResultsProps, BeerCardProps, BrewerCardProps } from "../types";
import "../styles/results.css";

export const SearchResults = ({ results }: ResultsProps) => {
    const query = useParams();
    console.log("results page", query, results);

    return (
        <main>
            {results.length > 0 &&
                results.map((item, i) => {
                    if ("description" in item) {
                        return <BeerCard key={i} item={item} />;
                    } else {
                        return <BrewerCard key={i} item={item} />;
                    }
                })}
        </main>
    );
};

const BeerCard = ({ item }: BeerCardProps) => {
    return (
        <Link to={`/brew/${item._id}`}>
            <div className="result-card">
                <div className="item-name">{item.name}</div>
                <div className="item-desc">{item.description}</div>
                <div>
                    {item.isAlcoholic
                        ? item.alcohol + "% alc"
                        : "Non-alcoholic"}
                </div>
            </div>
        </Link>
    );
};

const BrewerCard = ({ item }: BrewerCardProps) => {
    return (
        <Link to={`/brewer/${item._id}`}>
            <div className="result-card">
                <div className="item-name">{item.name}</div>
                <div className="item-desc">{item.location}</div>
                {item.beers && (
                    <ul>
                        {item.beers.map((beer, i) => (
                            <li key={i}>{beer.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </Link>
    );
};
