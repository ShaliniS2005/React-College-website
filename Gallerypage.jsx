import React from "react";

const gallery = [
  "Campus",
  "Library",
  "Computer Lab",
  "Seminar Hall",
  "Sports",
  "Hostel",
  "Cultural Fest",
  "Placement Cell"
];

function Gallerypage() {
  return (
    <div style={{ padding: "40px", background: "#eef5ff", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#003366" }}>
        Gallery
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          marginTop: "40px"
        }}
      >
        {gallery.map((item, index) => (
          <div
            key={index}
            style={{
              height: "180px",
              background: "linear-gradient(135deg,#1976d2,#42a5f5)",
              borderRadius: "15px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "22px",
              fontWeight: "bold",
              boxShadow: "0 5px 15px rgba(0,0,0,.2)"
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallerypage;
