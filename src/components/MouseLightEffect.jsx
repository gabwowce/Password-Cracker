import { useEffect, useState } from "react";

export default function MouseLightEffect() {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="mouse-light-effect"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        background: `radial-gradient(circle 250px at ${position.x}px ${position.y}px, 
                     rgba(255, 255, 255, 0.5), 
                     rgba(255, 255, 255, 0.01) 1%, 
                     rgba(0, 0, 0, 0.05) 20%, 
                     rgba(0, 0, 0, 0.3) 110%)`,
        transition: "background 0.05s ease-out",
      }}
    />
  );
}
