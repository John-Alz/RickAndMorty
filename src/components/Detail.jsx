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
        <div className='pt-12'>
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
        </div >
    )
}
