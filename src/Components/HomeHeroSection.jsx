import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HomeHeroSection() {
    const navigate = useNavigate();
  return (
    <section
      style={{
        position: "relative",
        height: "90vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
         
        }}
      >
        <source src="https://res.cloudinary.com/dedrf76xo/video/upload/v1766245703/1_bocbfk.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY FOR READABILITY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.45)",
          zIndex: -1,
        }}
      ></div>

      {/* LEFT SIDE TEXT */}
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingLeft: "5%",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              color: "#e5f0d6",
              fontSize: "3.8rem",
              fontWeight: "700",
              lineHeight: "1.2",
              fontFamily: "'Cinzel Decorative', serif",
              textShadow: "0px 3px 10px rgba(0,0,0,0.5)",
            }}
          >
            Royal Mehendi Designs  
            <span style={{ color: "#b58b34" }}> That Define Elegance</span>
          </motion.h1>

          {/* SUB TEXT */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              color: "#f3f3f3",
              fontSize: "1.3rem",
              marginTop: "15px",
              lineHeight: "1.6",
              maxWidth: "500px",
              textShadow: "0px 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Experience the blend of tradition and luxury with our premium
            bridal, Arabic, and festive mehendi artistry.
          </motion.p>

          {/* BUTTON */}
          <motion.a
                       initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/services")} 
            style={{
              display: "inline-block",
              marginTop: "25px",
              padding: "12px 28px",
              background: "#b58b34",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.1rem",
              borderRadius: "8px",
              textDecoration: "none",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
            }}
          >
            Explore Services
          </motion.a>
        </div>
      </div>
    </section>
  );
}
