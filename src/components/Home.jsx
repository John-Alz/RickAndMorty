import React, { useState } from 'react'
import Navbar from './Navbar'
import Personajes from './Personajes'

export default function Home({ characters, setCharacters, numberPage, setNumberPage, searchChar, handleChange, search }) {


    return (
        <div>
            <Navbar searchChar={searchChar} handleChange={handleChange} />
            <Personajes searchChar={searchChar} characters={characters} numberPage={numberPage} setNumberPage={setNumberPage} search={search} />
        </div>
    )
}
