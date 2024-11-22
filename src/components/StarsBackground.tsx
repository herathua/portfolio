import { useState, useEffect } from 'react';

const StarsBackground = () => {
  interface Star {
    x: number;
    y: number;
    size: number;
    color: string;
    blinkDuration: number;
    blinkDelay: number;
  }

  const [stars, setStars] = useState<Star[]>([]);

  const calculateStars = () => {
    const starColors = [
      'rgba(255, 255, 255, 0.8)',  // White
      'rgba(255, 250, 250, 0.8)',  // Red
      'rgba(0, 0, 255, 0.8)',  // Blue
      'rgba(255, 255, 0, 0.8)',  // Yellow
    ];

    const maxStars = 300; // Limit number of stars for better performance
    return Array.from({ length: maxStars }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 0.5 + 0.5,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      blinkDuration: 0.5 + Math.random() * 4, // Random blink duration
      blinkDelay: Math.random() * 5 // Random delay before blinking starts
    }));
  };

  useEffect(() => {
    const updateStars = () => {
      setStars(calculateStars());
    };

    // Set initial stars
    updateStars();

    // Debounced resize handler to limit updates on window resizing
    let resizeTimeout: NodeJS.Timeout;
    const resizeHandler = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateStars, 500); // Reduced debounce time
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="stars-background">
      {stars.map((star, index) => (
        <div
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            transform: `translate(${star.x}px, ${star.y}px)`,
            backgroundColor: star.color,
            animation: `blink ${star.blinkDuration}s infinite ${star.blinkDelay}s`,
          }}
          key={index}
        />
      ))}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 1; }
        }
        .stars-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          background-color: black;
        }
        .star {
          position: absolute;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default StarsBackground;
