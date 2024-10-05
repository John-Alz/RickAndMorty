import React from 'react'


export default function TableDetail({ id, originName, locationName, image }) {

    return (
        <div>
            <table className='w-[80%] m-auto'>
                <thead>
                    <tr>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Origen</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Localizacion</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>imagen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={id}>
                        <th className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-left'>
                            <p>{originName}</p>
                        </th>
                        <th className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-left'>
                            <p>{locationName}</p>
                        </th>
                        <th className='flex justify-center  px-5 py-5 border-b border-gray-200 bg-white text-sm text-left'>
                            <img className='w-14 rounded-full f' src={image} />
                        </th>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}
