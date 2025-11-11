import React from "react";
import { RiFlashlightFill, RiArrowRightLine } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #0f172a, #0a0f29, #0f172a)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "60px 20px",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Tagline */}
    

      {/* Heading */}
      <h1
        style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          color: "#fff",
          lineHeight: "1.2",
          marginBottom: "24px",
          maxWidth: "900px",
        }}
      >
        Breaking Barriers with
        <span
          style={{
            display: "block",
            background: "linear-gradient(to right, #60a5fa, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          Sign Language AI
        </span>
      </h1>

      {/* Subheading */}
      <p
        style={{
          fontSize: "1.25rem",
          color: "#94a3b8",
          maxWidth: "750px",
          lineHeight: "1.8",
          marginBottom: "50px",
        }}
      >
        Real-time sign language detection and translation powered by
        cutting-edge machine learning. Bridging communication gaps with
        technology.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        {/* Primary Button */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 32px",
            backgroundColor: "#2563eb",
            border: "none",
            color: "white",
            borderRadius: "10px",
            fontSize: "1.1rem",
            fontWeight: "500",
            boxShadow: "0 0 25px rgba(59,130,246,0.3)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#3b82f6";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#2563eb";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Start Talking
          <RiArrowRightLine size={20} />
        </button>

        {/* Secondary Button */}
        <button
          style={{
            padding: "16px 32px",
            backgroundColor: "#1e293b",
            border: "1px solid #334155",
            color: "white",
            borderRadius: "10px",
            fontSize: "1.1rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#334155";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#1e293b";
          }}
        >
Try Now        </button>
      </div>

      {/* Subtle glow background effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(56,189,248,0.1), transparent 70%)",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default HeroSection;
