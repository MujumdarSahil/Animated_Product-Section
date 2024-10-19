"use client";

import { useEffect, useRef, useState } from "react";
import ProductPage from "@/components/ProductPage";
import { products } from "@/constants";
import { Application } from "@splinetool/runtime";

const Home = () => {
  const canvasRef = useRef(null);
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const app = new Application(canvas);
      app.load("https://prod.spline.design/z7wvFtm6y2c75pFQ/scene.splinecode");
    }
  }, []);

  return (
    <main className="w-screen min-h-screen py-10 flex items-center justify-center bg-gradient-to-b  from-black via-blue-800 to-black overflow-y-hidden">
      {/* <canvas id="canvas3d" ref={canvasRef}></canvas> */}
      <div className="w-screen h-screen opacity-55 hidden md:block z-[2] bg-black absolute inset-0 top-0 right-0" />

      <ProductPage
        name={currentProduct.name}
        desc={currentProduct.description}
        images={currentProduct.images}
        price={currentProduct.price}
      />
    </main>
  );
};

export default Home;
