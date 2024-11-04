// Rating.jsx
import React from "react";
import "./Rating.css";

export default function Rating({ rating }) {
  const totalStars = 5;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? "star filled" : "star empty"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
