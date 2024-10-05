import React from 'react'
import Navbar from './Navbar'
import Personajes from './Personajes'

export default function Home({ characters, numberPage, setNumberPage }) {

    return (
        <div>
            <Navbar />
            <Personajes characters={characters} numberPage={numberPage} setNumberPage={setNumberPage} />
        </div>
    )
}
