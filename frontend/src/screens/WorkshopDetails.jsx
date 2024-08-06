import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getError } from '../utils';
import axios from 'axios';

export default function WorkshopDetails() {
  const params = useParams();
  console.log(params);
  const [workshop, setWorkshop] = useState();

  // console.log('iddddd::' , id);

    useEffect(() => {
        window.scrollTo(0, 0);
      });



  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/workshops/slug/${params.slug}`);
        console.log('data::', data);
        setWorkshop(data);
      } catch (error) {
        console.log(getError(error));
      }
    };

    fetchData();
  }, []);


  return (
    <div className="flex flex-col wrap text-left mt-24 ml-32 mb-24">
      <div>
        <h3 className="text-3xl font-bold mb-4">{workshop?.name}</h3>
      </div>
      <div className="text-gray-500 mb-4">
        duration: <span class="font-semibold">{workshop?.duration}hr </span>{' '}
        capacity: <span class="font-semibold">{workshop?.capacity}</span>
      </div>
      <div className="text-2xl font-bold mb-6">$299</div>
      <div className="grid grid-cols-5 gap-4 mb-6">
        <img
          className="w-full h-52 object-cover rounded-md"
          src={workshop?.images[0]}
          alt="Product image 1"
        ></img>
        <img
          className="w-full h-52 object-cover rounded-md"
          src={workshop?.images[1]}
          alt="Product image 1"
        ></img>
        <img
          className="w-full h-52 object-cover rounded-md"
          src={workshop?.images[2]}
          alt="Product image 1"
        ></img>
        <img
          className="w-full h-52 object-cover rounded-md"
          src={workshop?.images[3]}
          alt="Product image 1"
        ></img>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Workshop Details</h3>
      </div>
      <div className="mb-8">
        <p className="text-gray-500">{workshop?.description}</p>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
          Add to cart
        </button>
        <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300">
          Register
        </button>
      </div>
    </div>
  );
}
