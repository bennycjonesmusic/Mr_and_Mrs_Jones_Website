import Image from "next/image";
import { Navigation } from "./components/Navigation";
import BannerVisibility from "./components/bannerVisibility";



export default function Home() {


  return (
    <>
      <BannerVisibility />

    <main className="bg-black w-full relative">
      <Navigation />
      <section
        className="w-full px-0 relative"
        style={{
          height: "100vh",
          backgroundImage: "url('/promo_new.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top -20px",
          backgroundRepeat: "no-repeat",
        }}
      >
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
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "4rem",
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
            zIndex: 2,
            pointerEvents: "none"
          }}
        />
        <h1
          className="text-7xl text-center font-[var(--font-great-vibes)] absolute w-full"
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
        {/* Left Banner */}
        {/* Fixed banners only when reviews section is in view */}
      
 
        <h2 className="text-4xl font-bold mb-4">Some of our client reviews:</h2>

        <h3 className="text-2xl font-bold mt-20">Lauren Hammond</h3>
        <p className="max-w-2xl text-xl text-center">
          What a duo!! They are playing at the Kings head Stutton over the summer and we love having them there! Great music, fantastic singing and good vibes!
          What a team!
        </p>
        {/* Add more content/components here as needed */}

        <h3 className="text-2xl font-bold mt-20">Melissa Ward</h3>
        <p className="max-w-2xl text-xl text-center">
          Sarah and Ben played for our wedding ceremony and at our prosecco reception right after in May 2025. They were a perfect accompaniment to our day - they were faultless and really added a special springtime touch to the whole day. They learned not one but four requests for our ceremony and played them beautifully! They also moved from indoors to outdoors for the reception without a hitch. We can&#39;t recommend them enough and only regret we haven&#39;t been able to source footage of their music from our guests to better remember them by! Thanks so much for being a part of our day, it wouldn&#39;t have been the same without the pair of you adding the music ❤️
        </p>

           <h3 className="text-2xl font-bold mt-20">Libby Watkins</h3>
        <p className="max-w-2xl text-xl text-center">
          They were absolutely wonderful! Goodness they were such a talented couple! I will be recommending anyone that needs a duo to look them up! 
        </p>

        <h3 className="text-2xl font-bold mt-20">Natalie Howe</h3>
        <p className="max-w-2xl text-xl text-center">
          Just returned home after the most amazing two weeks in Mallorca where I was honoured to hear the music from Sarah and Ben for the first time (it won’t be last either!).  Their music is beautiful and we looked forward to hearing it every evening.  Sarah and Ben sung and played a requested song, which meant so much to us, you guys did it justice and we can’t thank you enough.  Sarah is one very talented singer and Ben is an incredible musician.  You are both stars and you made the holiday one to remember.  Not only were they amazing entertainment (a 10 out of 10 from me) but they were very lovely people who are now my friends. I can’t wait to hear them play again.  You guys are fabulous and you both have an incredible future ahead of you xx
        </p>
        <h3 className="text-2xl font-bold mt-20">Robin Naisby</h3>
        <p className="max-w-2xl text-xl text-center">
          From the moment my wife and I first heard Sarah and Ben on our cruise on Britannia we fell in love with their music. Sarah&#39;s voice has a gorgeous tone and pure quality. Ben&#39;s playing is brilliant such a variety of material. I bought one of their CD&#39;s after their set and we got talking and they are a really lovely genuine couple. They became our go-to evening entertainment.
        </p>


        <h3 className="text-2xl font-bold mt-20">
          Emma Q

        </h3>

        <p className="max-w-2xl text-xl text-center">

          I booked Sarah and Ben to play at my 40th Birthday Party. They are the perfect duo. Sarah has the most beautiful, versatile voice and Ben is an extremely talented acoustic and electric guitarist, together they are incredible. We chatted beforehand so that they could get a good feeling for the type of music I wanted which ranged from 80’s cheese to modern chart hits. They delivered a fantastic playlist and created a wonderful atmosphere for the party over three live sets and a music playlist in between. It was so wonderful to be able to dance to music again. Highly recommended for anyone looking to Party like it’s 2019! 
          Huge thanks to Sarah and Ben xx 
        </p>

                  <h3 className="text-2xl font-bold mt-20">
          Dave Green

        </h3>
        <p className="max-w-2xl text-xl text-center">

          Saw Mr and Mrs Jones on the recent Britannia Cruise and was very impressed. The acoustic playing was sublime, coupled with some beautiful vocals. The perfect music to compliment the ambience of the ship’s atrium. Could kick myself for not picking up a copy of the CD (saw a sign saying it was available, but forgot to follow through!) - but will definitely hunt a copy down.
        </p>
          
      </section>
    </main>
    </>
  );
}

