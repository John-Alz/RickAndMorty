import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import imgLogo from "../assets/rm.png"
import { Link } from 'react-router-dom';


export default function Navbar({ setSearchChar }) {


    const handleChange = (e) => {
        setSearchChar(e.target.value);
    }


    return (
        <div className='mb-8'>
            <nav className='w-[80%] m-auto flex justify-between items-center'>
                <div className='text-3xl font-bold'>
                    <Link to={"/"}>
                        <img className='w-[200px]' src={imgLogo} />
                    </Link>

                </div>
                <form className='relative'>
                    <input onChange={handleChange} className='w-[220px] rounded-xl py-1 px-2 border-2 border-black' type='text' placeholder='Busca un personaje!' />
                    <button className='absolute text-black right-2 top-2'><IoIosSearch size={20} /></button>
                </form>
            </nav>
        </div>
    )
}
