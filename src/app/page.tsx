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
        <div
          className="absolute p-6 z-10 top-10 left-0"
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
          <span
            style={{
              fontSize: '2.7rem',
              fontWeight: 700,
              color: '#fff',
              display: 'block',
              lineHeight: 1.1,
              marginBottom: '0.3em',
              letterSpacing: '0.04em',
              textShadow: '0 0 12px #b8860b, 0 2px 8px #000, 0 0 2px #fff',
              filter: 'drop-shadow(0 0 6px #dfb722)',
            }}
          >
            Suffolk Based Act
          </span>
          <span
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
          <span
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
          className="absolute z-10 top-15 right-45"
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
        <span style={{
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
        <span style={{
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
        <span style={{
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
        <span style={{
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
        <span style={{
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
        {/* Decorative stars left */}
        <style>{`
          @keyframes shine {
            0% { background-position: -120% 0; }
            100% { background-position: 220% 0; }
          }
          .shiny-star {
            background: linear-gradient(90deg, #fffbe6 0%, #dfb722 30%, #fffbe6 50%, #b8860b 70%, #dfb722 100%);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            animation: shine 2.5s linear infinite;
            filter: drop-shadow(0 0 2px #fffbe6) drop-shadow(0 0 4px #dfb722);
          }
        `}</style>
        <div style={{
          position: 'absolute',
          left: 0,
          top: '2rem',
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '2.2rem',
          zIndex: 1,
          pointerEvents: 'none',
        }}>
          <span className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.85, marginLeft: '0.5rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.7, marginLeft: '1.2rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.8rem', opacity: 0.6, marginLeft: '0.8rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.5, marginLeft: '1.5rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginLeft: '1.5rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.85, marginLeft: '1.2rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.6rem', opacity: 0.45, marginLeft: '0.7rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.55, marginLeft: '1.1rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.35, marginLeft: '1.6rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '2.1rem', opacity: 0.75, marginLeft: '0.9rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.4rem', opacity: 0.4, marginLeft: '1.3rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.7rem', opacity: 0.5, marginLeft: '0.6rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '2.0rem', opacity: 0.6, marginLeft: '1.4rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.1rem', opacity: 0.3, marginLeft: '1.7rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '2.4rem', opacity: 0.8, marginLeft: '0.7rem'}}>&#10022; &#10022;  </span>
          <span className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.45, marginLeft: '1.1rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.8rem', opacity: 0.4, marginLeft: '1.3rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.7, marginLeft: '0.8rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.3, marginLeft: '1.5rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.5, marginLeft: '1.1rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.35, marginLeft: '1.2rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '2.3rem', opacity: 0.7, marginLeft: '0.9rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginLeft: '1.6rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '2.4rem', opacity: 0.8, marginRight: '0.7rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.45, marginRight: '1.1rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.8rem', opacity: 0.4, marginRight: '1.3rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.7, marginRight: '0.8rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.3, marginRight: '1.5rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.5, marginRight: '1.1rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.35, marginRight: '1.2rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '2.3rem', opacity: 0.7, marginRight: '0.9rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginRight: '1.6rem'}}>&#10022; &#10022;</span>
        </div>
        {/* Decorative stars right */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: '4rem',
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '2.2rem',
          zIndex: 1,
          alignItems: 'flex-end',
          pointerEvents: 'none',
        }}>
          <span className="shiny-star" style={{fontSize: '1.7rem', opacity: 0.7, marginRight: '1.2rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.3rem', opacity: 0.85, marginRight: '0.5rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.5, marginRight: '1.5rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.6, marginRight: '0.8rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginRight: '1.5rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.85, marginRight: '1.2rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.6rem', opacity: 0.45, marginRight: '0.7rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.55, marginRight: '1.1rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.35, marginRight: '1.6rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.1rem', opacity: 0.75, marginRight: '0.9rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.4rem', opacity: 0.4, marginRight: '1.3rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.7rem', opacity: 0.5, marginRight: '0.6rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.0rem', opacity: 0.6, marginRight: '1.4rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.1rem', opacity: 0.3, marginRight: '1.7rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.4rem', opacity: 0.8, marginRight: '0.7rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.45, marginRight: '1.1rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.8rem', opacity: 0.4, marginRight: '1.3rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.7, marginRight: '0.8rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.3, marginRight: '1.5rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.5, marginRight: '1.1rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.35, marginRight: '1.2rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.3rem', opacity: 0.7, marginRight: '0.9rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginRight: '1.6rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.4rem', opacity: 0.8, marginRight: '0.7rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.45, marginRight: '1.1rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.8rem', opacity: 0.4, marginRight: '1.3rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.7, marginRight: '0.8rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.3, marginRight: '1.5rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.5, marginRight: '1.1rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.35, marginRight: '1.2rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.3rem', opacity: 0.7, marginRight: '0.9rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginRight: '1.6rem'}}>&#10022; &#10022;</span>
        </div>
        {/* Left Banner */}
        {/* Fixed banners only when reviews section is in view */}
      
 
        <h2 className="text-4xl font-bold mb-4">Some of our reviews:</h2>

        <h3 className="text-2xl font-bold mt-20">Lauren H</h3>
        <p className="max-w-2xl text-xl text-center">
          What a duo!! They are playing at the Kings head Stutton over the summer and we love having them there! Great music, fantastic singing and good vibes!
          What a team!
        </p>
        {/* Add more content/components here as needed */}

        <h3 className="text-2xl font-bold mt-20">Melissa W</h3>
        <p className="max-w-2xl text-xl text-center">
          Sarah and Ben played for our wedding ceremony and at our prosecco reception right after in May 2025. They were a perfect accompaniment to our day - they were faultless and really added a special springtime touch to the whole day. They learned not one but four requests for our ceremony and played them beautifully! They also moved from indoors to outdoors for the reception without a hitch. We can&#39;t recommend them enough and only regret we haven&#39;t been able to source footage of their music from our guests to better remember them by! Thanks so much for being a part of our day, it wouldn&#39;t have been the same without the pair of you adding the music ❤️
        </p>

           <h3 className="text-2xl font-bold mt-20">Libby W</h3>
        <p className="max-w-2xl text-xl text-center">
          They were absolutely wonderful! Goodness they were such a talented couple! I will be recommending anyone that needs a duo to look them up! 
        </p>

        <h3 className="text-2xl font-bold mt-20">Natalie H</h3>
        <p className="max-w-2xl text-xl text-center">
          Just returned home after the most amazing two weeks in Mallorca where I was honoured to hear the music from Sarah and Ben for the first time (it won’t be last either!).  Their music is beautiful and we looked forward to hearing it every evening.  Sarah and Ben sung and played a requested song, which meant so much to us, you guys did it justice and we can’t thank you enough.  Sarah is one very talented singer and Ben is an incredible musician.  You are both stars and you made the holiday one to remember.  Not only were they amazing entertainment (a 10 out of 10 from me) but they were very lovely people who are now my friends. I can’t wait to hear them play again.  You guys are fabulous and you both have an incredible future ahead of you xx
        </p>
        <h3 className="text-2xl font-bold mt-20">Robin N</h3>
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
          Dave G

        </h3>
        <p className="max-w-2xl text-xl text-center">

          Saw Mr and Mrs Jones on the recent Britannia Cruise and was very impressed. The acoustic playing was sublime, coupled with some beautiful vocals. The perfect music to compliment the ambience of the ship’s atrium. Could kick myself for not picking up a copy of the CD (saw a sign saying it was available, but forgot to follow through!) - but will definitely hunt a copy down.
        </p>
          
      </section>
    </main>
    </>
  );
}

