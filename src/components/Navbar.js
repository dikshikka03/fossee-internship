import React from "react";

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: "#43222a",
      color: "white",
      padding: "15px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap"
    }}>
      <h2 style={{ margin: 0 }}>Workshop Booking</h2>

      <div>
        <button
          style={{
            marginRight: "10px",
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "opacity 0.3s"
          }}
          onMouseEnter={(e) => e.target.style.opacity = "0.7"}
          onMouseLeave={(e) => e.target.style.opacity = "1"}
        >
          Home
        </button>

        <button
          style={{
            background: "",
            color: "#38070e",
            padding: "6px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "transform 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          Workshops
        </button>
      </div>
    </nav>
  );
};

export default Navbar;