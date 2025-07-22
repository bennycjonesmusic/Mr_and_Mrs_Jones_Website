"use client";
import { useState, useEffect } from "react";

export default function BannerVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const reviewsSection = document.getElementById("reviews-section");
    if (!reviewsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(reviewsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            background: "linear-gradient(90deg, #dfb722 60%, #b8860b 100%)",
            color: "#fffbe6",
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: "0.5rem 2rem",
            borderRadius: "0.5rem 0 0 0.5rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            zIndex: 10,
            letterSpacing: "1px",
            display: 'block',
          }}
          id="left-banner"
        >
          Book Now
        </div>
      )}
      {isVisible && (
        <div
          style={{
            position: "fixed",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            background: "linear-gradient(90deg, #dfb722 60%, #b8860b 100%)",
            color: "#fffbe6",
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: "0.5rem 2rem",
            borderRadius: "0 0.5rem 0.5rem 0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            zIndex: 10,
            letterSpacing: "1px",
            display: 'block',
          }}
          id="right-banner"
        >
          Watch Our Videos
        </div>
      )}
    </>
  );
}





        {/* Right Banner */}
       

