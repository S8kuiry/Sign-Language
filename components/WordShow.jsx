import React from "react";

const WordShow = ({ word }) => {
  if (!word) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "96px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0, 0, 0, 0.6)",
        color: "white",
        padding: "12px 18px",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "1.5rem",
        textAlign: "left",
        width: "400px", // fixed width
        whiteSpace: "nowrap", // single line
        overflowX: "auto", // enable horizontal scroll
        overflowY: "hidden",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
        border: "1px solid rgba(255,255,255,0.2)",
        transition: "all 0.3s ease-in-out",
        zIndex: 50,
        scrollbarColor: "#3b82f6 rgba(255,255,255,0.1)",
        scrollbarWidth: "thin",
      }}
    >
      <div
        style={{
          display: "inline-block",
          background: "linear-gradient(to right, #06b6d4, #3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          userSelect: "none",
        }}
      >
        {word}
      </div>

      {/* Custom modern scrollbar styling */}
      <style>
        {`
          div::-webkit-scrollbar {
            height: 6px;
          }
          div::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }
          div::-webkit-scrollbar-thumb {
            background: linear-gradient(to right, #06b6d4, #3b82f6);
            border-radius: 10px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to right, #0ea5e9, #2563eb);
          }
        `}
      </style>
    </div>
  );
};

export default WordShow;
