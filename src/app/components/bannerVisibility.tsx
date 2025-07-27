"use client";
import { useState, useEffect } from "react";

export default function BannerVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    // Hide banners if screen width is less than 1500px
    const checkNarrow = () => {
      if (typeof window !== 'undefined') {
        setIsNarrow(window.innerWidth < 1500);
      }
    };
    checkNarrow();
    window.addEventListener('resize', checkNarrow);

    const reviewsSection = document.getElementById("reviews-section");
    if (!reviewsSection) return () => window.removeEventListener('resize', checkNarrow);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(reviewsSection);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkNarrow);
    };
  }, []);

  // Only show banners if screen is at least 1500px wide
  if (isNarrow) return null;

  return (
    <>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            left: 100,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'auto',
            height: 'auto',
          }}
        >
          <a
            href="/Book"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem',
              background: 'linear-gradient(90deg, #dfb722 60%, #b8860b 100%)',
              color: '#222',
              fontWeight: 600,
              fontSize: '1.1rem',
              padding: '0.7rem 1.6rem',
              borderRadius: '2rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.13)',
              letterSpacing: '0.5px',
              textDecoration: 'none',
              transition: 'box-shadow 0.2s, background 0.2s',
              border: 'none',
            }}
            onMouseOver={e => (e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.22)')}
            onMouseOut={e => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.13)')}
          >
            <span style={{fontSize: '1.3rem', lineHeight: 1}}>💬</span>
            Book Us Now
          </a>
          <div style={{ position: 'relative', marginTop: '0.18rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid #232323',
                marginBottom: '-1px',
                filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.15))',
              }}
            />
            <div
              style={{
                background: 'linear-gradient(135deg, #232323 80%, #444 100%)',
                color: '#fffbe6',
                fontSize: '1rem',
                fontFamily: 'Segoe UI, Arial, sans-serif',
                padding: '0.7rem 1.3rem',
                borderRadius: '1.1rem',
                boxShadow: '0 4px 18px rgba(0,0,0,0.18)',
                textAlign: 'center',
                maxWidth: '240px',
                lineHeight: 1.5,
                fontWeight: 400,
                border: '1.5px solid #3a3a3a',
                letterSpacing: '0.01em',
              }}
            >
              Check out our instant quote generator and send us a booking request.
            </div>
          </div>
        </div>
      )}
      {isVisible && (
        <div
          style={{
            position: "fixed",
            right: 100,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'auto',
            height: 'auto',
          }}
        >
          <a
            href="/Videos"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem',
              background: 'linear-gradient(90deg, #dfb722 60%, #b8860b 100%)',
              color: '#222',
              fontWeight: 600,
              fontSize: '1.1rem',
              padding: '0.7rem 1.6rem',
              borderRadius: '2rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.13)',
              letterSpacing: '0.5px',
              textDecoration: 'none',
              transition: 'box-shadow 0.2s, background 0.2s',
              border: 'none',
            }}
            onMouseOver={e => (e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.22)')}
            onMouseOut={e => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.13)')}
          >
            <span style={{fontSize: '1.3rem', lineHeight: 1}}>🎬</span>
            Watch Our Videos
          </a>
          <div style={{ position: 'relative', marginTop: '0.18rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid #232323',
                marginBottom: '-1px',
                filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.15))',
              }}
            />
            <div
              style={{
                background: 'linear-gradient(135deg, #232323 80%, #444 100%)',
                color: '#fffbe6',
                fontSize: '1rem',
                fontFamily: 'Segoe UI, Arial, sans-serif',
                padding: '0.7rem 1.3rem',
                borderRadius: '1.1rem',
                boxShadow: '0 4px 18px rgba(0,0,0,0.18)',
                textAlign: 'center',
                maxWidth: '240px',
                lineHeight: 1.5,
                fontWeight: 400,
                border: '1.5px solid #3a3a3a',
                letterSpacing: '0.01em',
              }}
            >
              See us in action live at various gigs or check out our youtube videos!
            </div>
          </div>
        </div>
      )}
    </>
  );
}





        {/* Right Banner */}
       

