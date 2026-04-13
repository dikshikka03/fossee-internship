import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{
      background: "linear-gradient(to right, #7a5e6c, #601b37)",
      color: "white",
      textAlign: "center",
      padding: isMobile ? "40px 15px" : "60px 20px"
    }}>
      <h1 style={{
        fontSize: isMobile ? "26px" : "40px",
        marginBottom: "20px"
      }}>
        Learn & Grow with Workshops
      </h1>

      <p style={{ marginBottom: "20px" }}>
        Book your seat in top technical workshops easily
      </p>

      <button
        style={{
          backgroundColor: "white",
          color: "#ee0d67",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "transform 0.2s"
        }}
        onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
        onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
      >
        Explore Workshops
      </button>
    </div>
  );
};

export default Hero;