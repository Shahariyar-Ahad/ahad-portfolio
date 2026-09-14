"use client";

import React, { useState } from "react";
import Image from "next/image";

const Photos = () => {
  const myPhotos = [
    "/assets/photo (11).png",
    "/assets/india2.png",
    "/assets/photo (1).png",
    "/assets/photo(5).png",
    "/assets/myimage.png",
    "/assets/shihab.png",
    "/assets/india.png",
    "/assets/photo (8).png",
    "/assets/photo (9).png",
  ];

  // Selected image for modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Desktop: 3 images per slide
  const desktopSlides = [];

  for (let i = 0; i < myPhotos.length; i += 3) {
    desktopSlides.push(myPhotos.slice(i, i + 3));
  }

  return (
    <section className="mx-auto my-4 w-full max-w-[1040px] px-4 sm:px-6 lg:px-0 my-5">

      <div className="carousel w-full">

        {desktopSlides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            id={`slide${slideIndex + 1}`}
            className="carousel-item relative w-full"
          >

            {/* ================= DESKTOP ================= */}
            <div className="hidden w-full items-center justify-center gap-4 px-12 lg:flex">
              {slide.map((photo, index) => (
                <div
  key={index}
  onClick={() => setSelectedPhoto(photo)}
  className="
    relative
    z-10
    h-fit
    w-fit
    cursor-pointer
    overflow-hidden
    rounded-xl
    border
    border-gray-200
    bg-gray-100
    shadow-sm
    transition
    hover:scale-[1.02]
  "
>
                  <Image
                    src={photo}
                    alt={`My photo ${slideIndex * 3 + index + 1}`}
                    width={400}
                    height={300}
                    sizes="150px"
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>


            {/* ================= MOBILE ================= */}
            <div className="grid w-full grid-cols-4 grid-rows-2 gap-2 lg:hidden">
              {myPhotos.map((photo, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPhoto(photo)}
                  className="
                    h-fit
                    w-fit
                    cursor-pointer
                    overflow-hidden
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-100
                    shadow-sm
                    transition
                    hover:scale-[1.02]
                    sm:rounded-xl
                  "
                >
                  <Image
                    src={photo}
                    alt={`My photo ${index + 1}`}
                    width={400}
                    height={400}
                    sizes="25vw"
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>


            {/* ================= NAVIGATION ================= */}
            {desktopSlides.length > 1 && (
              <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between">

                {/* Previous */}
                <a
                  href={`#slide${
                    slideIndex === 0
                      ? desktopSlides.length
                      : slideIndex
                  }`}
                  className="btn btn-circle btn-sm sm:btn-md"
                >
                  ❮
                </a>

                {/* Next */}
                <a
                  href={`#slide${
                    slideIndex === desktopSlides.length - 1
                      ? 1
                      : slideIndex + 2
                  }`}
                  className="btn btn-circle btn-sm sm:btn-md"
                >
                  ❯
                </a>

              </div>
            )}

          </div>
        ))}

      </div>


      {/* ================= IMAGE MODAL ================= */}
      {selectedPhoto && (
        <div
          className="modal modal-open"
          role="dialog"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="
              modal-box
              max-w-5xl
              bg-white
              p-3
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="btn btn-sm btn-circle absolute right-3 top-3 z-10"
            >
              ✕
            </button>

            {/* Large Image */}
            <div className="flex max-h-[80vh] w-full items-center justify-center">
              <Image
                src={selectedPhoto}
                alt="Selected photo"
                width={1200}
                height={900}
                className="
                  max-h-[75vh]
                  w-auto
                  max-w-full
                  object-contain
                "
              />
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Photos;



