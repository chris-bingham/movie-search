import { APIKey } from "../credentials";
import { fetchData } from "./network";

export const getMovieData = async (query) =>
    await fetchData(`http://www.omdbapi.com/?s=${query}&apikey=${APIKey}`);
