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
        <div className="flex flex-col w-full items-center">
          {/* Desktop arrows (side) */}
          <div className="hidden sm:flex items-center justify-center w-full relative">
            <button
              onClick={prevVideo}
              className="text-5xl text-[#dfb722] px-4 py-2 rounded-full hover:bg-[#dfb722] hover:text-black transition absolute left-0 z-10"
              aria-label="Previous Video"
            >
              &#8592;
            </button>
            <div className="w-full max-w-full md:max-w-2xl aspect-video bg-black rounded-lg shadow-lg flex items-center justify-center mx-auto">
              <iframe
                width="100%"
                height="100%"
                style={{ minHeight: '220px', maxHeight: '60vw' }}
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
              className="text-5xl text-[#dfb722] px-4 py-2 rounded-full hover:bg-[#dfb722] hover:text-black transition absolute right-0 z-10"
              aria-label="Next Video"
            >
              &#8594;
            </button>
          </div>
          {/* Mobile arrows (below) */}
          <div className="flex sm:hidden flex-col items-center w-full mt-4">
            <div className="w-full max-w-full aspect-video bg-black rounded-lg shadow-lg flex items-center justify-center mx-auto">
              <iframe
                width="100%"
                height="100%"
                style={{ minHeight: '220px', maxHeight: '60vw' }}
                src={videos[current].url}
                title={videos[current].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-row justify-center items-center w-full mt-2 gap-8">
              <button
                onClick={prevVideo}
                className="text-5xl text-[#dfb722] px-6 py-3 rounded-full hover:bg-[#dfb722] hover:text-black transition flex items-center justify-center"
                aria-label="Previous Video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dfb722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              </button>
              <button
                onClick={nextVideo}
                className="text-5xl text-[#dfb722] px-6 py-3 rounded-full hover:bg-[#dfb722] hover:text-black transition flex items-center justify-center"
                aria-label="Next Video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dfb722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 text-white text-lg font-semibold">{videos[current].title}</div>
      </main>
    </>
  );
}
