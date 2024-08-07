import React from 'react';

const EditProduct = () => {
  return (
    <div className="flex items-start justify-start min-h-screen bg-white-100 p-4 pl-32">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-left">Edit product</h2>
        <form>
          <h3 className="text-xl font-semibold mb-4 text-left">
            Product details
          </h3>
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="productName"
                className="block text-gray-700 font-bold mb-4 text-left"
              >
                Product name
              </label>
              <input
                type="text"
                id="productName"
                className="w-[500px] px-3 py-2 mb-24 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-4 text-left mt-4"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                className="w-[500px] px-3 py-2 mb-24 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              <label
                htmlFor="category"
                className="block text-gray-700 font-bold mb-4 text-left mt-4 m-"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                className="w-[500px] px-3 py-2 mb-24 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-4 text-left mt-4"
              >
                Description
              </label>
              <textarea
                id="description"
                className="w-[500px] px-3 py-2 mb-24 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                rows="4"
              ></textarea>
            </div>
            <div className="flex-2">
              <h3 className="text-xl font-semibold mb-4 text-left">
                Product images
              </h3>
              <div className="flex flex-wrap space-x-4">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center mb-4"
                  >
                    <img
                      src="https://zaatarandzaytoun.com/wp-content/uploads/2020/06/makdous-18.jpg"
                      alt="Product"
                      className="w-[200px] h-[150px] rounded-md mb-4"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded m-2"
                      >
                        Delete
                      </button>
                    </div>
                    {/* <input type="file" className="w-full text-gray-700 mb-4" /> */}
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 mt-4">
                <button
                  type="button"
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring focus:border-red-700"
                >
                  Delete product
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;

// import React from 'react';

// const EditProduct = () => {
//   return (
//     <div className="flex items-start justify-start min-h-screen bg-white-100 p-4 pl-32">
//       <div className="bg-white p-8 rounded-lg w-full max-w-6xl">
//         <h2 className="text-2xl font-bold mb-6 text-left">Edit product</h2>
//         <form>
//           <h3 className="text-xl font-semibold mb-4 text-left">
//             Product details
//           </h3>
//           <div className="flex">
//             <div className="flex-1 mb-4">
//               <label
//                 htmlFor="productName"
//                 className="block text-gray-700 font-bold mb-2 text-left"
//               >
//                 Product name
//               </label>
//               <input
//                 type="text"
//                 id="productName"
//                 className="w-[300px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               />
//               <div className="flex-1 mb-4">
//                 <label
//                   htmlFor="price"
//                   className="block text-gray-700 font-bold mb-2 text-left"
//                 >
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   id="price"
//                   className="w-[300px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//                 />
//               </div>
//               <div className="flex-1 mb-4">
//                 <label
//                   htmlFor="category"
//                   className="block text-gray-700 font-bold mb-2 text-left"
//                 >
//                   Category
//                 </label>
//                 <input
//                   type="text"
//                   id="category"
//                   className="w-[300px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//                 />
//               </div>
//               <div className="flex-1 mb-4">
//                 <label
//                   htmlFor="description"
//                   className="block text-gray-700 font-bold mb-2 text-left"
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   className="w-[300px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//                   rows="4"
//                 ></textarea>
//               </div>
//             </div>
//             <div className="flex-2 ml-8">
//               <h3 className="text-xl font-semibold mb-4 text-left">
//                 Product images
//               </h3>
//               <div className="flex space-x-4">
//                 <div className="flex flex-col items-center mb-4">
//                   <img
//                     src="https://zaatarandzaytoun.com/wp-content/uploads/2020/06/makdous-18.jpg"
//                     alt="Product"
//                     className="w-[200px] h-[200px] rounded-md mb-4"
//                   />
//                   <input type="file" className="w-full text-gray-700 mb-4" />
//                 </div>
//                 <div className="flex flex-col items-center mb-4">
//                   <img
//                     src="https://zaatarandzaytoun.com/wp-content/uploads/2020/06/makdous-18.jpg"
//                     alt="Product"
//                     className="w-[200px] h-[200px] rounded-md mb-4"
//                   />
//                   <input type="file" className="w-full text-gray-700 mb-4" />
//                 </div>
//                 <div className="flex flex-col items-center mb-4">
//                   <img
//                     src="https://zaatarandzaytoun.com/wp-content/uploads/2020/06/makdous-18.jpg"
//                     alt="Product"
//                     className="w-[200px] h-[200px] rounded-md mb-4"
//                   />
//                   <input type="file" className="w-full text-gray-700 mb-4" />
//                 </div>
//                 <div className="flex flex-col items-center mb-4">
//                   <img
//                     src="https://zaatarandzaytoun.com/wp-content/uploads/2020/06/makdous-18.jpg"
//                     alt="Product"
//                     className="w-[200px] h-[200px] rounded-md mb-4"
//                   />
//                   <input type="file" className="w-full text-gray-700 mb-4" />
//                 </div>
//               </div>
//               <div className="flex space-x-4 mt-4">
//                 <button
//                   type="button"
//                   className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring focus:border-red-700"
//                 >
//                   Delete product
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-700"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProduct;
