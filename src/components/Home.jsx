import React, { useState } from 'react'
import Navbar from './Navbar'
import Personajes from './Personajes'

export default function Home({ characters, setSearchChar, numberPage, setNumberPage }) {


    return (
        <div>
            <Navbar setSearchChar={setSearchChar} />
            <Personajes characters={characters} numberPage={numberPage} setNumberPage={setNumberPage} />
        </div>
    )
}
