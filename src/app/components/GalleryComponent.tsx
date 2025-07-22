"use client";
import Image from "next/image";
import { useState } from "react";

export function GalleryComponent({ images }: { images: string[] }) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-15">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-lg"
            onClick={() => setSelectedImg(src)}
          >
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <Image
            src={selectedImg}
            alt="Selected image"
            width={800}
            height={600}
            className="rounded-lg shadow-2xl max-w-full max-h-full"
          />
          <button
            className="absolute top-8 right-8 text-white text-4xl font-bold cursor-pointer z-50 bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-80"
            onClick={() => setSelectedImg(null)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
