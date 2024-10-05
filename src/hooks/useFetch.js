import { useEffect, useState } from "react";

export function useFetch(url) {
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCharacters(data.results))
    }, [])

    return { characters, setCharacters }
}