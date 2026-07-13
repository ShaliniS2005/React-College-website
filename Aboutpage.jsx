import React from "react";

function Aboutpage() {
  return (
    <div style={{ padding: "40px", background: "#f4f8fb", minHeight: "100vh" }}>
      <h1 style={{ color: "#003366", textAlign: "center" }}>
        About Our College
      </h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
        }}
      >
        <h2>Who We Are</h2>
        <p>
          Sha College of Engineering and Technology is one of the leading
          engineering institutions committed to providing quality education,
          innovation, and research. Our campus offers excellent infrastructure,
          experienced faculty, and industry-oriented learning.
        </p>

        <h2>Vision</h2>
        <p>
          To become a globally recognized institution producing competent
          engineers with ethical values.
        </p>

        <h2>Mission</h2>
        <ul>
          <li>Provide quality technical education.</li>
          <li>Promote research and innovation.</li>
          <li>Develop leadership and entrepreneurship.</li>
          <li>Prepare students for global careers.</li>
        </ul>
      </div>
    </div>
  );
}

export default Aboutpage;
