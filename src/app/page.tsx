import Image from "next/image";
import { Navigation } from "./components/Navigation";

export default function Home() {
  return (
    <>
      

    <main
      className="bg-black min-h-screen w-full relative"
      style={{
        backgroundImage: "url('/promo_new.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top -20px",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <Navigation />
      <section className="w-full px-0 relative" style={{height: "100vh"}}>
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
    </main>
    </>
  );
}
