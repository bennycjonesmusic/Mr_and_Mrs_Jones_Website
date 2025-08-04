
import Image from "next/image";
import { Navigation } from "./components/Navigation";
import BannerVisibility from "./components/bannerVisibility";
import WeddingHeading from "./components/WeddingHeading";

import AnalyticsUpdaterWrapper from "./components/AnalyticsUpdaterWrapper";

import ReviewsStarsLeft from "./components/ReviewsStarsLeft";
import ReviewsStarsRight from "./components/ReviewsStarsRight";




export default function Home() {
  return (
    <>
      <AnalyticsUpdaterWrapper />
      <BannerVisibility />
      <main className="bg-black w-full relative">
        <Navigation />
        <section
          className="w-full px-0 relative homepage-hero-section"
        >
          <div
            className="homepage-hero-text-container absolute md:p-6 z-10 bottom-2 left-2 lg:top-10 xl:left-0 z-30"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', Times, serif",
              letterSpacing: '0.03em',
              textShadow: "0 2px 12px #000, 0 0px 2px #000",
              background: 'rgba(0,0,0,0.18)',
              borderRadius: '1.2rem',
              maxWidth: '90vw',
              boxShadow: '0 2px 16px 0 rgba(0,0,0,0.18)',
            }}
          >
            <WeddingHeading variant="sub" style={{
              fontSize: '2.7rem',
              fontWeight: 700,
              color: '#fff',
              display: 'block',
              lineHeight: 1.1,
              marginBottom: '0.3em',
              letterSpacing: '0.04em',
              textShadow: '0 0 12px #b8860b, 0 2px 8px #000, 0 0 2px #fff',
              filter: 'drop-shadow(0 0 6px #dfb722)',
            }}>
              <span className="homepage-hero-title">Suffolk Based Act</span>
            </WeddingHeading>
          <span className="homepage-hero-sub"
            style={{
              fontSize: '1.45rem',
              fontWeight: 500,
              color: '#fffbe6',
              textShadow: '0 0 6px #b8860b, 0 2px 8px #000',
              display: 'block',
              marginBottom: '0.1em',
              letterSpacing: '0.02em',
            }}
          >
            Two Guitars, Two Voices
          </span>
          <span className="homepage-hero-sub"
            style={{
              fontSize: '1.45rem',
              fontWeight: 400,
              color: '#fffbe6',
              textShadow: '0 0 6px #b8860b, 0 2px 8px #000',
              display: 'block',
              letterSpacing: '0.01em',
            }}
          >
            No Backing Tracks, Just Live Music
          </span>
        </div>

     <div
          className="homepage-hero-genres absolute z-10 md:top-15 md:right-0 lg:top-15 lg:right-0 xl:top-15 xl:right-45"
          style={{
            fontFamily: "'Playfair Display', Georgia, 'Times New Roman', Times, serif",
            letterSpacing: '0.03em',
            textShadow: "0 2px 12px #000, 0 0px 2px #000",
            background: 'none',
            border: 'none',
            borderRadius: 0,
            maxWidth: '90vw',
            boxShadow: 'none',
            padding: 0,
          }}
        >
        <span className="homepage-hero-tag" style={{
             fontSize: '2.1rem',
              fontWeight: 700,
              color: '#fff',
              display: 'block',
              lineHeight: 1.1,
              marginBottom: '0.3em',
              letterSpacing: '0.04em',
              textShadow: '0 0 12px #b8860b, 0 2px 8px #000, 0 0 2px #fff',
              filter: 'drop-shadow(0 0 6px #dfb722)',
        }}>#Country</span>
        <span className="homepage-hero-tag" style={{
          fontSize: '2.1rem',
              fontWeight: 700,
              color: '#fff',
              display: 'block',
              lineHeight: 1.1,
              marginBottom: '0.3em',
              letterSpacing: '0.04em',
              textShadow: '0 0 12px #b8860b, 0 2px 8px #000, 0 0 2px #fff',
              filter: 'drop-shadow(0 0 6px #dfb722)',
        }}>#Pop</span>
        <span className="homepage-hero-tag" style={{
          fontSize: '2.1rem',
              fontWeight: 700,
              color: '#fff',
              display: 'block',
              lineHeight: 1.1,
              marginBottom: '0.3em',
              letterSpacing: '0.04em',
              textShadow: '0 0 12px #b8860b, 0 2px 8px #000, 0 0 2px #fff',
              filter: 'drop-shadow(0 0 6px #dfb722)',
        }}>#Folk</span>
        <span className="homepage-hero-tag" style={{
          fontSize: '2.1rem',
              fontWeight: 700,
              color: '#fff',
              display: 'block',
              lineHeight: 1.1,
              marginBottom: '0.3em',
              letterSpacing: '0.04em',
              textShadow: '0 0 12px #b8860b, 0 2px 8px #000, 0 0 2px #fff',
              filter: 'drop-shadow(0 0 6px #dfb722)',
        }}>#Acoustic</span>
        <span className="homepage-hero-tag" style={{
          fontSize: '2.1rem',
              fontWeight: 700,
              color: '#fff',
              display: 'block',
              lineHeight: 1.1,
              marginBottom: '0.3em',
              letterSpacing: '0.04em',
              textShadow: '0 0 12px #b8860b, 0 2px 8px #000, 0 0 2px #fff',
              filter: 'drop-shadow(0 0 6px #dfb722)',
        }}>#Harmonies</span>




        </div>
        {/* Overlay for heading legibility */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "6.5rem",
            background: "rgba(0,0,0,0.45)",
            zIndex: 1
          }}
        />
        {/* Gradient fade to black at bottom for smooth blend */}
        <div className="h-[40rem] md:h-[6rem]"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
            zIndex: 2,
            pointerEvents: "none"
          }}
        />
        <h1
          className="homepage-hero-h1 md:text-7xl text-center font-[var(--font-great-vibes)] absolute w-full homepage-bottom-brand"
          style={{
            fontFamily: "var(--font-great-vibes)",
            background: "linear-gradient(90deg, #dfb722 5%, #dfb722 30%, #b8860b 50%, #dfb722 70%, #b8860b 95%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 1px #fffbe6, 1px 1px 2px #dfb722, 0 0 2px #dfb722, 2px 2px 4px #000, 0 0 1px #b8860b, 0 0 2px #b8860b",
            filter: "drop-shadow(0 0 1px #dfb722)",
            left: 0,
            right: 0,
            bottom: 15,
            zIndex: 2
          }}
        >
          <span style={{fontSize: '0.8em', verticalAlign: 'middle', marginRight: '0.5em', color: '#dfb722'}}>&#10022; &#10022;</span>
          Mr and Mrs Jones Duo
          <span style={{fontSize: '0.8em', verticalAlign: 'middle', marginLeft: '0.5em', color: '#dfb722'}}>&#10022; &#10022;</span>
        </h1>
      </section>
      {/* Second section below hero */}
      <section className="w-full py-16 bg-black text-white flex flex-col items-center relative" id="reviews-section">
        <ReviewsStarsLeft />
        <ReviewsStarsRight />
        {/* Left Banner */}
        {/* Fixed banners only when reviews section is in view */}
      
 
        <WeddingHeading variant="sub" className="text-4xl font-bold mb-4">
          <h2>Client Reviews:</h2>
        </WeddingHeading>

        <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
          <h3>Lauren H</h3>
        </WeddingHeading>
        <p className="max-w-2xl text-xl text-center">
          What a duo!! They are playing at the Kings head Stutton over the summer and we love having them there! Great music, fantastic singing and good vibes!
          What a team!
        </p>
        {/* Add more content/components here as needed */}

        <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
          <h3>Steve D</h3>
        </WeddingHeading>
        <p className="max-w-2xl text-xl text-center">
          Sarah and Ben played for our wedding ceremony and at our prosecco reception right after in May 2025. They were a perfect accompaniment to our day - they were faultless and really added a special springtime touch to the whole day. They learned not one but four requests for our ceremony and played them beautifully! They also moved from indoors to outdoors for the reception without a hitch. We can&#39;t recommend them enough and only regret we haven&#39;t been able to source footage of their music from our guests to better remember them by! Thanks so much for being a part of our day, it wouldn&#39;t have been the same without the pair of you adding the music ❤️
        </p>

        <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
          <h3>Sarah M</h3>
        </WeddingHeading>
        <p className="max-w-2xl text-xl text-center">
          Fantastic couple, great voices and hit exactly the right vibe for the party.

        Everyone commented how good they were
            </p>

           <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
             <h3>Libby W</h3>
           </WeddingHeading>
        <p className="max-w-2xl text-xl text-center">
          They were absolutely wonderful! Goodness they were such a talented couple! I will be recommending anyone that needs a duo to look them up! 
        </p>

        <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
          <h3>Natalie H</h3>
        </WeddingHeading>
        <p className="max-w-2xl text-xl text-center">
          Just returned home after the most amazing two weeks in Mallorca where I was honoured to hear the music from Sarah and Ben for the first time (it won’t be last either!).  Their music is beautiful and we looked forward to hearing it every evening.  Sarah and Ben sung and played a requested song, which meant so much to us, you guys did it justice and we can’t thank you enough.  Sarah is one very talented singer and Ben is an incredible musician.  You are both stars and you made the holiday one to remember.  Not only were they amazing entertainment (a 10 out of 10 from me) but they were very lovely people who are now my friends. I can’t wait to hear them play again.  You guys are fabulous and you both have an incredible future ahead of you xx
        </p>
        <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
          <h3>Robin N</h3>
        </WeddingHeading>
        <p className="max-w-2xl text-xl text-center">
          From the moment my wife and I first heard Sarah and Ben on our cruise on Britannia we fell in love with their music. Sarah&#39;s voice has a gorgeous tone and pure quality. Ben&#39;s playing is brilliant such a variety of material. I bought one of their CD&#39;s after their set and we got talking and they are a really lovely genuine couple. They became our go-to evening entertainment.
        </p>


        <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
          <h3>Emma Q</h3>
        </WeddingHeading>

        <p className="max-w-2xl text-xl text-center">

          I booked Sarah and Ben to play at my 40th Birthday Party. They are the perfect duo. Sarah has the most beautiful, versatile voice and Ben is an extremely talented acoustic and electric guitarist, together they are incredible. We chatted beforehand so that they could get a good feeling for the type of music I wanted which ranged from 80’s cheese to modern chart hits. They delivered a fantastic playlist and created a wonderful atmosphere for the party over three live sets and a music playlist in between. It was so wonderful to be able to dance to music again. Highly recommended for anyone looking to Party like it’s 2019! 
          Huge thanks to Sarah and Ben xx 
        </p>

                  <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
                    <h3>Dave G</h3>
                  </WeddingHeading>
        <p className="max-w-2xl text-xl text-center">

          Saw Mr and Mrs Jones on the recent Britannia Cruise and was very impressed. The acoustic playing was sublime, coupled with some beautiful vocals. The perfect music to compliment the ambience of the ship’s atrium. Could kick myself for not picking up a copy of the CD (saw a sign saying it was available, but forgot to follow through!) - but will definitely hunt a copy down.
        </p>

                 <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
                   <h3>Gareth L</h3>
                 </WeddingHeading>
        <p className="max-w-2xl text-xl text-center">

          My customers loved it & we would love to have you back again! Sarah you have an amazing voice & Ben, you are an incredibly talented Guitarist!! Thank you for doing the gig, I also know quite a few other landlords in the area & I`m very happy to recommend you to other venues!
        </p>

             <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
               <h3>Drax Energy Solutions</h3>
             </WeddingHeading>
        <p className="max-w-2xl text-xl text-center">

          It was a pleasure to have you both at our summer social, we had so much great feedback about how great you guys were which is fab!
          We would definitely love to have you back at the next event so will keep your details to hand! 
        </p>
                   <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
                     <h3>Matthew F</h3>
                   </WeddingHeading>
        <p className="max-w-2xl text-xl text-center">

          Stunning vocals and guitar playing and a great range of music. Will definitely be looking out for future performances.
        </p>

                  <WeddingHeading variant="sub" className="text-2xl font-bold mt-20">
                    <h3>Lynsey S</h3>
                  </WeddingHeading>
        <p className="max-w-2xl text-xl text-center">

          Sarah and Ben were great and such lovely people too! thank you!
        </p>
          
          
          
          
      </section>
    </main>
       <footer className="bg-black text-white p-4 text-center bottom-0" id="footer">
                <p id="footer-text">&copy; {new Date().getFullYear()} Mr and Mrs Jones Duo. All rights reserved. Photography by Andy Ingram</p>
            </footer>
    </>
  );
}

