import React from "react";

function Contactpage() {
  return (
    <div style={{ padding: "40px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#003366" }}>
        Contact Us
      </h1>

      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,.2)"
        }}
      >
        <h3>SHA College of Engineering and Technology</h3>

        <p>📍 Virudhunagar, Tamil Nadu</p>

        <p>📞 +91 9876543210</p>

        <p>📧 info@scet.edu.in</p>

        <hr />

        <input
          type="text"
          placeholder="Your Name"
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        ></textarea>

        <button
          style={{
            background: "#003366",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contactpage;
