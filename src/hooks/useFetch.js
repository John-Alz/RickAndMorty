import { useEffect, useState } from "react";

export function useFetch(url, page, searchChar) {
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCharacters(data.results))
    }, [page, searchChar])

    return { characters, setCharacters }
}