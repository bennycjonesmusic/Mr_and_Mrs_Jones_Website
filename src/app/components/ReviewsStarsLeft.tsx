'use client';


import React from "react";


// Helper to forward ref to span
const StarSpan = React.forwardRef<HTMLSpanElement, React.HTMLProps<HTMLSpanElement>>((props, ref) => (
  <span ref={ref} {...props} />
));
StarSpan.displayName = "StarSpan";

function DynamicStarsLeft({ children }: {children: React.ReactNode}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = React.useState(React.Children.count(children));
  const [hasMeasured, setHasMeasured] = React.useState(false);
  const starElements = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && (child.type === 'span' || child.type === StarSpan)
  );
  const tempRefs = React.useMemo(() => starElements.map(() => React.createRef<HTMLSpanElement>()), [starElements]);

  React.useEffect(() => {
    // First pass: render all stars so refs are populated
    if (!hasMeasured) {
      setHasMeasured(true);
      setVisibleCount(starElements.length);
      return;
    }
    const updateCount = () => {
      setTimeout(() => {
        const footerText = document.getElementById('footer-text');
        if (!containerRef.current || !footerText) {
          setVisibleCount(starElements.length);
          return;
        }
        const footerTop = footerText.getBoundingClientRect().top;
        let count = 0;
        for (let i = 0; i < tempRefs.length; i++) {
          const el = tempRefs[i].current;
          if (el) {
            const starBottom = el.getBoundingClientRect().bottom;
            if (starBottom >= footerTop) break;
            count++;
          }
        }
        setVisibleCount(count);
      }, 0);
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    window.addEventListener('scroll', updateCount);
    return () => {
      window.removeEventListener('resize', updateCount);
      window.removeEventListener('scroll', updateCount);
    };
  }, [starElements.length, tempRefs, hasMeasured]);

  return (
    <div
      ref={containerRef}
      className="reviews-stars-left"
      style={{
        position: 'absolute',
        left: '1rem',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        alignItems: 'flex-start',
        pointerEvents: 'none',
      }}
    >
      {starElements.slice(0, visibleCount).map((child, i) => {
        if (
          React.isValidElement(child) &&
          (child.type === 'span' || child.type === StarSpan)
        ) {
          const el = child as React.ReactElement;
          const props = el.props as React.HTMLProps<HTMLSpanElement>;
          return React.cloneElement(
            <StarSpan ref={tempRefs[i]}>{props.children}</StarSpan>,
            {
              className: props.className,
              style: props.style,
              key: i
            }
          );
        }
        return React.isValidElement(child)
          ? React.cloneElement(child, { key: i })
          : child;
      })}
    </div>
  );
}

const style = `
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
`;

export default function ReviewsStarsLeft() {
  return (
    <>
      <style>{style}</style>
      <DynamicStarsLeft>
        <StarSpan className="shiny-star" style={{fontSize: '1.7rem', opacity: 0.7, marginLeft: '1.2rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.3rem', opacity: 0.85, marginLeft: '0.5rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.5, marginLeft: '1.5rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.6, marginLeft: '0.8rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginLeft: '1.5rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.85, marginLeft: '1.2rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.6rem', opacity: 0.45, marginLeft: '0.7rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.55, marginLeft: '1.1rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.35, marginLeft: '1.6rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.1rem', opacity: 0.75, marginLeft: '0.9rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.4rem', opacity: 0.4, marginLeft: '1.3rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.7rem', opacity: 0.5, marginLeft: '0.6rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.0rem', opacity: 0.6, marginLeft: '1.4rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.1rem', opacity: 0.3, marginLeft: '1.7rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.4rem', opacity: 0.8, marginLeft: '0.7rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.45, marginLeft: '1.1rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.8rem', opacity: 0.4, marginLeft: '1.3rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.7, marginLeft: '0.8rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.3, marginLeft: '1.5rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.5, marginLeft: '1.1rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.35, marginLeft: '1.2rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.3rem', opacity: 0.7, marginLeft: '0.9rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginLeft: '1.6rem'}}>&#10022; &#10022;</StarSpan>
         <StarSpan className="shiny-star" style={{fontSize: '1.7rem', opacity: 0.7, marginLeft: '1.2rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.3rem', opacity: 0.85, marginLeft: '0.5rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.5, marginLeft: '1.5rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.6, marginLeft: '0.8rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginLeft: '1.5rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.85, marginLeft: '1.2rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.6rem', opacity: 0.45, marginLeft: '0.7rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.55, marginLeft: '1.1rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.35, marginLeft: '1.6rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.1rem', opacity: 0.75, marginLeft: '0.9rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.4rem', opacity: 0.4, marginLeft: '1.3rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.7rem', opacity: 0.5, marginLeft: '0.6rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.0rem', opacity: 0.6, marginLeft: '1.4rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.1rem', opacity: 0.3, marginLeft: '1.7rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.4rem', opacity: 0.8, marginLeft: '0.7rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.45, marginLeft: '1.1rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.8rem', opacity: 0.4, marginLeft: '1.3rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.7, marginLeft: '0.8rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.3, marginLeft: '1.5rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.5, marginLeft: '1.1rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.35, marginLeft: '1.2rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '2.3rem', opacity: 0.7, marginLeft: '0.9rem'}}>&#10022; &#10022;</StarSpan>
        <StarSpan className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginLeft: '1.6rem'}}>&#10022; &#10022;</StarSpan>
      </DynamicStarsLeft>
    </>
  );
}
