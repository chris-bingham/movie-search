import React, { useState, useEffect } from "react";

import { MovieCard } from "./MovieCard";
import { getMovieData } from "./utils/moviedata";

export const SearchResults = ({ query }) => {
    const [movies, setMovies] = useState({ Search: null });

    const getMovies = async (query) => {
        setMovies(await getMovieData(query));
    };

    useEffect(() => {
        getMovies(query);
    }, [query]);

    return (
        <>
            {movies.Search && movies.Search.length
                ? movies.Search.map((item, index) => (
                      <MovieCard key={index} data={item} />
                  ))
                : ""}
        </>
    );
};
