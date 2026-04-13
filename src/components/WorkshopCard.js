import React from "react";

const WorkshopCard = ({ title, description, date }) => {
  // Container Style
  const cardStyle = {
    backgroundColor: "#300810",
    borderRadius: "16px",
    padding: "24px",
    margin: "15px",
    width: "300px",
    boxShadow: "0 10px 25px rgba(227, 184, 184, 0.48)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "1px solid #592f2f",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    fontFamily: "'Poppins', sans-serif",
  };

  return (
    <div 
      className="workshop-card"
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(175, 145, 145, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(164, 146, 146, 0.05)";
      }}
    >
      {/* Date Tag */}
      <span style={{ 
        fontSize: "12px", 
        fontWeight: "600", 
        color: "#ed91a2", 
        textTransform: "uppercase",
        letterSpacing: "1px" 
      }}>
        {date}
      </span>

      {/* Title */}
      <h3 style={{ 
        margin: "0", 
        fontSize: "1.25rem", 
        color: "#d490a0",
        lineHeight: "1.4"
      }}>
        {title}
      </h3>

      {/* Description */}
      <p style={{ 
        margin: "0", 
        fontSize: "0.95rem", 
        color: "#f1dee5", 
        lineHeight: "1.6" 
      }}>
        {description}
      </p>

      {/* Action Button */}
      <button style={{
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "#ef123a82",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontWeight: "600",
        cursor: "pointer"
      }}>
        View Details
      </button>
    </div>
  );
};

export default WorkshopCard;