import React, { useState } from 'react'
import Navbar from './Navbar'
import Personajes from './Personajes'

export default function Home({ characters, setSearchChar, numberPage, setNumberPage }) {


    return (
        <div className=' w-full pt-12 pb-12'>
            <Navbar setSearchChar={setSearchChar} />
            <Personajes characters={characters} numberPage={numberPage} setNumberPage={setNumberPage} />
        </div>
    )
}
