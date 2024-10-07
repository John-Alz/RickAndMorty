import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



export default function Episodios({ characters }) {

    const [episodes, setEpisodes] = useState([]);

    const [personaje, setPersonaje] = useState([]);
    const [episode, setEpisode] = useState([]);
    const [page, setPage] = useState(1);



    const params = useParams();
    let idParams = params.id;

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setEpisodes(data.results)
                console.log(episodes);

            })
    }, [page])


    const foundCharacter = () => {
        const characterFound = characters.filter((item) => item.id === parseInt(idParams))
        setPersonaje(characterFound)
        // console.log(personaje);
    }

    const foundEpisode = () => {
        const espisodeFound = episodes.filter((item) => item.characters.find((item) => item === `https://rickandmortyapi.com/api/character/${idParams}`))
        setEpisode(espisodeFound)
        console.log(episode);
    }

    useEffect(() => {
        foundCharacter()
        foundEpisode()
    }, [page, idParams, episodes])


    return (
        <div>
            <div className='w-[80%] m-auto pb-8 flex justify-between items-center'>
                <Link to={"/"} ><button className='flex items-center font-semibold'><IoIosArrowBack /> Home
                </button></Link>


                {
                    personaje.map((item) => {
                        return (
                            <div key={item.id} className='flex items-center gap-3'>
                                <h2 className='font-bold'>{item.name}</h2>
                                <img className='w-14 rounded-full' src={item.image} />
                            </div>
                        )
                    })
                }
            </div>
            <table className='w-[80%] m-auto'>
                <thead>
                    <tr>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>No Episodio</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Nombre</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>Episodio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        episode.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <th className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-left'>{item.id}</th>
                                    <th className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-left'>{item.name}</th>
                                    <th className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>{item.episode}</th>

                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot >

                </tfoot>
            </table>
            <div className=' flex justify-center gap-8 pt-8'>
                <button className='bg-black text-white p-2 rounded-full' onClick={() => setPage(page - 1)} disabled={page == 1 ? true : false}><IoIosArrowBack size={20} /></button>
                <button>{page}</button>
                <button className='bg-black text-white p-2 rounded-full' onClick={() => setPage(page + 1)} disabled={page == 3 ? true : false}><IoIosArrowForward size={20} />
                </button>
            </div>
        </div>
    )
}
