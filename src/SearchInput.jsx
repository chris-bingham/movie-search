import React from "react";

export const SearchInput = ({ callback }) => {
    const handleInput = (event) => {
        callback(event.target.value);
    };
    return <input type={"text"} onChange={handleInput}></input>;
};
