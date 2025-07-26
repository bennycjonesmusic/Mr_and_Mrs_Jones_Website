"use client";
import { useState } from "react";
import AnalyticsUpdaterWrapper from "../components/AnalyticsUpdaterWrapper";
import { Navigation } from "../components/Navigation";

const videos = [
  {
    id: "1",
    url: "https://www.youtube.com/embed/ZOFBq6RJAi8",
    title: "Country Promo Video"
  },
  {
    id: "2",
    url: "https://www.youtube.com/embed/46B919K8Ae4",
    title: "Annies Song Cover"
  },
  {
    id: "3",
    url: "https://www.youtube.com/embed/-llN8-U_57E?si=ir5dN6-PCgvFg-Ts",
    title: "Top Of The World Cover"
  }
];

export default function VideosClient() {
  const [current, setCurrent] = useState(0);

  const prevVideo = () => setCurrent((current - 1 + videos.length) % videos.length);
  const nextVideo = () => setCurrent((current + 1) % videos.length);

  return (
    <>
      <AnalyticsUpdaterWrapper />
      <Navigation />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black">
        <h1 className="text-4xl font-bold mb-8 text-white">Videos</h1>
        <p className="text-lg mb-4 text-white max-w-4xl">Check out our latest performances and music videos below! To see more videos including footage taken at gigs, please check out our Instagram and Facebook pages. The links for those pages are on the top right.</p>
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
