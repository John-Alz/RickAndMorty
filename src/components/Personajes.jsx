import React, { useEffect, useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { useFetch } from '../hooks/useFetch';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';


export default function Personajes({ characters = [], numberPage, setNumberPage }) {




    // useEffect(() => {
    //     search();
    // }, [searchChar])




    return (
        <div>

            <table className='w-[80%] m-auto'>
                <thead>
                    <tr>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Nombre</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Estado</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Especie</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>Ver episodios</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>ver info</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        characters.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <th className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-left'>
                                        <div className='flex items-center gap-5'>
                                            <img className='w-10 rounded-full' src={item.image} />
                                            <p>{item.name}</p>
                                        </div>

                                    </th>
                                    <th className={"px-5 py-5 border-b border-gray-200 bg-white text-sm text-left"}>
                                        <p className={`text-center ${item.status == "Alive" ? "bg-green-200 py-1 w-[50%] rounded-full" : item.status == "Dead" ? "bg-red-200 py-1 w-[50%] rounded-full" : item.status == "unknown" ? "bg-slate-300 py-1 w-[80%] rounded-full" : null}`}>{item.status}</p>
                                    </th>
                                    <th className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-left'>{item.species}</th>
                                    <th className='px-5 py-5 border-b border-gray-200 bg-white text-sm items-center'><Link to={`/episodes/${item.id}`}><button><FaRegEye /></button></Link></th>
                                    <th className='px-5 py-5 border-b border-gray-200 bg-white text-sm items-center'><Link to={`/detail/${item.id}`}><button><FaRegEye /></button></Link></th>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
            {/* <Pagination numberPage={numberPage} setNumberPage={setNumberPage} /> */}
        </div >
    )
}
