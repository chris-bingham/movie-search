import React, { useState } from "react";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export const App = () => {
    const [query, setQuery] = useState("");

    return (
        <main>
            <SearchInput callback={setQuery} />

            <SearchResults query={query} />
        </main>
    );
};
