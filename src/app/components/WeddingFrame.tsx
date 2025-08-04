'use client';

import React from 'react';

interface WeddingFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function WeddingFrame({ children, className = '' }: WeddingFrameProps) {
  return (
    <>
      <style jsx>{`
        .wedding-frame {
          position: relative;
          border: 3px solid #dfb722;
          border-radius: 12px;
          padding: 50px;
          background: linear-gradient(135deg, rgba(223, 183, 34, 0.03) 0%, rgba(184, 134, 11, 0.05) 50%, rgba(223, 183, 34, 0.03) 100%);
          box-shadow: 
            0 8px 32px rgba(223, 183, 34, 0.15),
            inset 0 1px 0 rgba(255, 251, 230, 0.3),
            0 0 0 1px rgba(184, 134, 11, 0.1);
        }

        .wedding-frame::before,
        .wedding-frame::after {
          content: "❦";
          position: absolute;
          width: 24px;
          height: 24px;
          font-size: 18px;
          color: #dfb722;
          background: radial-gradient(circle, #fffbe6 0%, #dfb722 70%);
          border: 2px solid #b8860b;
          border-radius: 50%;
          line-height: 20px;
          text-align: center;
          box-shadow: 
            0 2px 8px rgba(223, 183, 34, 0.4),
            inset 0 1px 0 rgba(255, 251, 230, 0.8);
          text-shadow: 0 0 3px #b8860b;
        }

        .wedding-frame::before {
          top: -12px;
          left: -12px;
        }

        .wedding-frame::after {
          bottom: -12px;
          right: -12px;
        }

        /* Additional decorative elements */
        .wedding-frame {
          overflow: visible;
        }

        .wedding-frame::after {
          transform: rotate(180deg);
        }
      `}</style>
      <div className={`wedding-frame ${className}`}>
        {children}
      </div>
    </>
  );
}
