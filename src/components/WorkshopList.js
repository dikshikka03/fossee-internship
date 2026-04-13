import React from "react";
import WorkshopCard from "./WorkshopCard";

const workshops = [
  {
    title: "React Basics",
    description: "Learn fundamentals of React",
    date: "20 April 2026"
  },
  {
    title: "AI Workshop",
    description: "Intro to Machine Learning",
    date: "25 April 2026"
  },
  {
    title: "Web Development",
    description: "HTML, CSS, JS full course",
    date: "30 April 2026"
  }
];

const WorkshopList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "40px",
        padding: "20px"
      }}
    >
      {workshops.map((workshop, index) => (
        <WorkshopCard key={index} {...workshop} />
      ))}
    </div>
  );
};

export default WorkshopList;