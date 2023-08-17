import React from "react";
import PaddingContainer from "@/components/PaddingContainer";
import type { Metadata } from "next";
import Gallery from "./ImageGrid";
import Slideshow from "./ImageSlider";

export const metadata: Metadata = {
  title: "Galería",
  description: "Colección de fotos de mi autoría.",
};

const imagesSlider = [
  {
    alt: "Parque Nacional Huerquehue",
    src: "/images/1.jpg",
  },
  {
    alt: "Puente Entre Rios",
    src: "/images/2.jpg",
  },
  {
    alt: "Mi gata Karlota",
    src: "/images/3.jpg",
  },
  {
    alt: "Sunset en Nueva Imperial",
    src: "/images/4.jpg",
  },
];
const images = [
  {
    alt: "5",
    src: "/images/5.jpg",
    location: "Carahue",
    category: "Naturaleza",
    date: "03-08-2021",
  },
  {
    alt: "6",
    src: "/images/6.jpg",
    location: "Pucón",
    category: "Naturaleza",
    date: "12-09-2022",
  },
  {
    alt: "7",
    src: "/images/7.jpg",
    location: "Nva. Imperial",
    category: "Naturaleza",
    date: "12-09-2022",
  },
  {
    alt: "8",
    src: "/images/8.jpg",
    location: "Nva. Imperial",
    category: "Naturaleza",
    date: "12-09-2022",
  },
  {
    alt: "16",
    src: "/images/16.jpg",
    location: "Temuco",
    category: "Naturaleza",
    date: "12-09-2022",
  },
  {
    alt: "13",
    src: "/images/13.jpg",
    location: "Curacautín",
    category: "Naturaleza",
    date: "12-09-2022",
  },

  // ... Agrega más imágenes aquí ...
];

export default function Galery() {
  return (
    <PaddingContainer>
      <div className=" pt-12 md:space-y-5">
        <h1 className="text-xl font-extrabold leading-8 tracking-tight sm:text-2xl sm:leading-10 ">
          Galería de imágenes
        </h1>
      </div>
      <main className="mt-8 space-y-8">
        <Slideshow slides={imagesSlider} />
        <Gallery images={images} />
      </main>
    </PaddingContainer>
  );
}
