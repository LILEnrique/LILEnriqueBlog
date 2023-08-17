import React from "react";
import Image from "next/image";
import FormattedDate from "@/components/utils/DateFormatter";

interface GalleryProps {
  images: {
    alt: string;
    src: string;
    category: string;
    date: string;
    location: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2">
      {images.map((image, index) => (
        <div className="borderBW space-y-4 rounded-md px-5 py-6 " key={index}>
          <>
            <Image
              className="aspect-square h-auto max-h-[300px] w-full rounded-md object-cover object-center opacity-95 hover:opacity-100 hover:shadow-xl"
              width={600}
              height={400}
              alt={image.alt}
              src={image.src}
            />

            <div>
              <div className=" xl:col-row-3 ">
                <div className="flex gap-1 text-xs text-zinc-500 dark:text-zinc-400 ">
                  <div className="borderBW inline-flex rounded-md border  px-1.5 py-1 capitalize text-primaryLight dark:border-zinc-800 dark:text-primaryDark">
                    <strong>{image.location}</strong>
                  </div>
                  <div className="borderBW inline-flex rounded-md  border px-1.5 py-1 dark:border-zinc-800">
                    <strong>
                      <FormattedDate date={image.date} />
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
