import React, { useContext } from "react";
import myContext from "../../../../context/data/myContext";

function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct, thumbnail, setThumbnail } = context;
    // console.log(products)
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>

          {/* <div className="mb-3">
             
            {thumbnail && (
              <img
                className=" w-auto   rounded-md mb-3 "
                src={thumbnail ? URL.createObjectURL(thumbnail) : ""}
                alt="thumbnail"
              />
            )}

            <input
              type="file"
              label="Upload thumbnail"
              className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
              onChange={(e) => setThumbnail(e.target.files[0])}
            />
          </div> */}

          <div>
            <input
              type="text"
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              value={products.title}
              name="title"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>

          <div>
            <input
              type="text"
              name="price"
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              value={products.price}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input type="file"
            name="uplode thumbnail"
            onChange={(e) => setThumbnail(e.target.files[0])}
            className="bg-gray-600 px-2 py-2 mb-4 rounded-lg"
            
            />
{/*             
            <input
              type="text"
              name="thumbnail"
              onChange={(e) =>
                setProducts({ ...thumbnail, thumbnail: e.target.value })
              }
              value={products.thumbnail}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product thumbnail"
            /> */}
          </div>
          
          <div>
            <input
              type="text"
              name="category"
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              value={products.category}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="description"
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
              // value={products.description}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product description"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={addProduct}
              className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
