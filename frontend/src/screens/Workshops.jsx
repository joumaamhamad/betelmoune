import React, { useEffect, useState } from 'react'
import { getError } from '../utils';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Workshops() {

    const [ workshops , setWorkshops ] = useState([]);

    useEffect(() => {

        const fetchWorkshops = async () => {

            try{
                const { data } = await axios.get('/api/workshops');
                console.log(data);
                setWorkshops(data);
            }catch(error){
                console.log(getError(error))
            }
        }

        fetchWorkshops();
    },[])



return (

    <div className="p-6 font-sans">
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-left text-4xl font-bold mb-6">All Workshops</h1>
            <div className="flex space-x-4 mb-6">
                <button className="bg-gray-200 px-4 py-2 rounded">All</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Upcoming</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Trending</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Free</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Premium</button>
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search workshops"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                />
            </div>
            <h2 className='text-left text-2xl font-bold mb-6'>Featured</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            
                {
                    workshops.map((workshop) => (
                        <div className="px-4 rounded-lg shadow-lg hover:opacity-60 pt-4 pb-4" key={workshop.slug}>
                            <Link to={`/workshop/${workshop.slug}`}>
                                <img
                                    src={workshop.images[0]}
                                    alt={workshop.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </Link>
                            <p className="text-left mt-4 font-semibold">{workshop.name}</p>
                            <p className="text-left mt-2 text-gray-600">{workshop.price}${" "}.{workshop.duration}hr</p>
                        </div>
                    ))
                }
                {/* {products.map((product) => (
                    <div
                        className="px-4 rounded-lg shadow-lg hover:opacity-60"
                        key={product.id}
                    >
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <p className="text-left mt-4 font-semibold">{product.name}</p>
                        <p className="text-left mt-2 text-gray-600">{product.price}</p>
                    </div>
                ))} */}
            </div>
        </div>
    </div>
)
}

export default Workshops