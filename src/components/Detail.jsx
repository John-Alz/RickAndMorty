import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import TableDetail from './TableDetail';


export default function Detail({ characters }) {

    const [personaje, setPersonaje] = useState([]);

    const params = useParams();

    // console.log(params);

    const foundCharacter = () => {
        const characterFound = characters.filter((item) => item.id === parseInt(params.id))
        setPersonaje(characterFound)
        // console.log(personaje.name);

    }

    useEffect(() => {
        foundCharacter()
    }, [])


    return (
        <div>
            <div className='w-[80%] m-auto pb-8 flex justify-between items-center'>
                <Link to={"/"} ><button className='flex items-center font-semibold'><IoIosArrowBack /> Home
                </button></Link>


                {
                    personaje.map((item) => {
                        return (
                            <div key={item.id} className='flex items-center'>
                                <h2 className='font-bold'>{item.name}</h2>
                            </div>
                        )
                    })
                }
            </div>
            {
                personaje.map((item) => {
                    return (
                        <div key={item.id} >
                            <TableDetail id={item.id} name={item.name} originName={item.origin.name} locationName={item.location.name} image={item.image} />
                        </div>
                    )
                })
            }

            {/* <div className='w-[80%] m-auto pb-8 flex justify-between items-center'>
                <Link to={"/"} ><button className='flex items-center font-semibold'><IoIosArrowBack /> Home
                </button></Link>


                {
                    personaje.map((item) => {
                        return (
                            <div key={item.id} className='flex items-center'>
                                <h2 className='fon'>{item.name}</h2>
                            </div>
                        )
                    })
                }
            </div>
            <table className='w-[80%] m-auto'>
                <thead>
                    <tr>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Origen</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Localizacion</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        personaje.map((item, i) => {
                            return (
                                <tr key={item.id}>
                                    <th className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-left'>
                                        <p>{item.origin.name}</p>
                                    </th>
                                    <th className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-left'>
                                        <p>{item.location.name}</p>
                                    </th>
                                    <th className='flex justify-center  px-5 py-5 border-b border-gray-200 bg-white text-sm text-left'>
                                        <img className='w-14 rounded-full f' src={item.image} />
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table> */}
        </div >
    )
}
