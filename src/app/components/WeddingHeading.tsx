'use client';

import React from 'react';

interface WeddingHeadingProps {
  children: React.ReactNode;
  variant?: 'main' | 'sub' | 'section';
  className?: string;
}

export default function WeddingHeading({ children, variant = 'main', className = '' }: WeddingHeadingProps) {
  return (
    <>
      <style jsx>{`
        .wedding-heading {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-shadow: 0 0 8px #dfb722, 0 2px 4px rgba(0,0,0,0.5);
          background: linear-gradient(135deg, #fffbe6 0%, #dfb722 50%, #b8860b 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 3px #dfb722);
        }
        
        .wedding-subheading {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-weight: 600;
          letter-spacing: 0.015em;
          color: #fffbe6;
          text-shadow: 0 0 6px #dfb722, 0 2px 4px rgba(0,0,0,0.4);
        }

        .section-title {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-weight: 700;
          letter-spacing: 0.03em;
          background: linear-gradient(135deg, #fffbe6 0%, #dfb722 50%, #b8860b 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px #dfb722;
          filter: drop-shadow(0 0 4px #dfb722);
        }
      `}</style>
      <div className={`wedding-${variant === 'main' ? 'heading' : variant === 'sub' ? 'subheading' : 'section-title'} ${className}`}>
        {children}
      </div>
    </>
  );
}
