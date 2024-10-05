import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Pagination({ numberPage, setNumberPage }) {

    const nextPage = () => {
        setNumberPage(numberPage + 1)
    }
    const prevPage = () => {
        setNumberPage(numberPage - 1)
    }
    return (
        <div>
            <div className=' flex justify-center gap-8 pt-8'>
                <button className='bg-black text-white p-2 rounded-full' onClick={prevPage} disabled={numberPage == 1 ? true : false}><IoIosArrowBack size={20} /></button>
                <button>{numberPage}</button>
                <button className='bg-black text-white p-2 rounded-full' onClick={nextPage} ><IoIosArrowForward size={20} />
                </button>
            </div>
        </div>
    )
}
