'use client';
import { useState } from "react";
import { Navigation } from "../components/Navigation";

const videos = [
  {
    id: "1",
    url: "https://www.youtube.com/embed/VIDEO_ID_1",
    title: "Performance 1"
  },
  {
    id: "2",
    url: "https://www.youtube.com/embed/VIDEO_ID_2",
    title: "Performance 2"
  },
  {
    id: "3",
    url: "https://www.youtube.com/embed/VIDEO_ID_3",
    title: "Performance 3"
  }
];

export default function Videos() {
  const [current, setCurrent] = useState(0);

  const prevVideo = () => setCurrent((current - 1 + videos.length) % videos.length);
  const nextVideo = () => setCurrent((current + 1) % videos.length);

  return (
    <>
      <Navigation />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black">
        <h1 className="text-4xl font-bold mb-8 text-white">Videos</h1>
        <p className="text-lg mb-4 text-white">Check out our latest performances and music videos below!</p>
        <div className="flex items-center justify-center gap-8 w-full">
          <button
            onClick={prevVideo}
            className="text-3xl text-[#dfb722] px-4 py-2 rounded-full hover:bg-[#dfb722] hover:text-black transition"
            aria-label="Previous Video"
          >
            &#8592;
          </button>
          <div className="w-[90vw] max-w-2xl aspect-video bg-black rounded-lg shadow-lg flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              src={videos[current].url}
              title={videos[current].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
          <button
            onClick={nextVideo}
            className="text-3xl text-[#dfb722] px-4 py-2 rounded-full hover:bg-[#dfb722] hover:text-black transition"
            aria-label="Next Video"
          >
            &#8594;
          </button>
        </div>
        <div className="mt-4 text-white text-lg font-semibold">{videos[current].title}</div>
      </main>
    </>
  );
}


// ...existing code...