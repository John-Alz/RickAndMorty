import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";


export default function Navbar() {

    let [searchChar, setSearchChar] = useState('');

    const handleChange = (e) => {
        setSearchChar(e.target.value)
        console.log(searchChar);
    }



    const search = () => {
        let characterFound = characters.filter((item) => item.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchChar));
        console.log(characterFound);
        setCharacters(characterFound)
    }

    return (
        <div className='mb-8'>
            <nav className='w-[80%] m-auto flex justify-between items-center'>
                <div className='text-3xl font-bold'>
                    <h1>RickAndMorty</h1>
                </div>
                <form className='relative'>
                    <input onChange={handleChange} className='w-[220px] rounded-xl p-1 border border-black' type='text' placeholder='Busca un personaje!' />
                    <button className='absolute text-black right-2 top-2'><IoIosSearch size={20} /></button>
                </form>
            </nav>
        </div>
    )
}
