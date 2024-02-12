import React, { useState } from "react";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImage, setActiveImage] = useState(images.img1);

  return (
    <div className="flex flex-col jusify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImage}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-24">
          <img
            src={images.img1}
            alt=""
            className="w-24 h-24 rounded-md"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 rounded-md"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 rounded-md"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-24 h-24 rounded-md"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="text-violet-600 font-semibold">Special Sneaker</span>
          <h1 className=" text-gray-900 text-3xl font-bold">
            Nike Invinscible 3
          </h1>
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          blanditiis repellat debitis sint, asperiores quo reiciendis illo,
          earum dolorum harum odio maxime error voluptatibus reprehenderit
          numquam eligendi consequuntur id quas, odit quia et. Aspernatur
          facilis veritatis reprehenderit est necessitatibus perspiciatis
          nesciunt. Unde consequatur cumque voluptates ex illum incidunt?
        </p>
        <h6 className="text-2lg font-semibold">$ 199.00. </h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button className="bg-gray-200 py-4 px-6 rounded-lg text-violet-900 text-3xl">
              -
            </button>
            <span className="py-4 px-6 rounded-lg text-gray-950">1</span>
            <button className="bg-gray-200 py-4 px-6 rounded-lg text-violet-900 text-3xl">
              +
            </button>
          </div>
          <button className="bg-violet-800 text-white font-semibold py-3 px-6 rounded-xl h-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
