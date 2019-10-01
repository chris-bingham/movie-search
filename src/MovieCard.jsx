import React from "react";

export const MovieCard = ({ data }) => {
    return <img src={data.Poster} alt={`Poster for ${data.Title}`} />;
};
